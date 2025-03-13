import React, { use } from "react";

const Order = () => {
  const userSession = JSON.parse(localStorage.getItem("user-session"));
  console.log(userSession.state.accessToken);
  return (
    <div>
      {/* <p>{userSession !== null && userSession.state.user.email}</p> */}
      Order
    </div>
  );
};

export default Order;
