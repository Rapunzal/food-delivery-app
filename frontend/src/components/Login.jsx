import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import userStore from "../stores/UserStore";

const Login = ({ setShowLogin }) => {
  const [login, setLogin] = useState(true);
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
  function handleSignUp() {}
  return (
    <div className="absolute z-1 w-full h-full bg-[#00000090] grid">
      <form
        className="place-self-center flex flex-col max-w-80 gap-6 bg-white p-7 border rounded-[4px]"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between">
          {login ? <h2>Login</h2> : <h2>Sign Up</h2>}
          <IoIosClose onClick={() => setShowLogin(false)} className="w-6 h-6" />
        </div>
        <div className="flex flex-col gap-8">
          {!login ? (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-black p-1 rounded-[4px] "
            />
          ) : (
            ""
          )}
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
        <button className=" rounded-[4px] bg-orange-500 p-2">
          {login ? "Login" : "Sign Up"}
        </button>
        {login ? (
          <p>
            Create new Account{" "}
            <span
              onClick={() => setLogin(false)}
              className="underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an Account{" "}
            <span
              onClick={() => setLogin(true)}
              className="underline cursor-pointer"
            >
              Login{" "}
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
