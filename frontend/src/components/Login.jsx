import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import userStore from "../stores/UserStore";

const Login = ({ setShowLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { setUser, setTokens, user } = userStore.getState();
  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      name,
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/users/login",
        data
      );
      console.log(response);
      setUser(response.data);
      console.log(user);
      setTokens(response.data.token);
      axios.defaults.headers.common["Authorization"] =
        "Bearer" + response.data.token;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="absolute z-1 w-full h-full bg-[#00000090] grid">
      <form
        className="place-self-center flex flex-col max-w-80 gap-6 bg-white p-7 border rounded-[4px]"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between">
          <h2>Sign Up</h2>
          <IoIosClose onClick={() => setShowLogin(false)} className="w-6 h-6" />
        </div>
        <div className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-black p-1 rounded-[4px] "
          />
          <input
            type="email"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="border border-black  p-1 rounded-[4px] "
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="border border-black  p-1 rounded-[4px] "
          />
        </div>
        <button className=" rounded-[4px] bg-orange-500 p-2">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
