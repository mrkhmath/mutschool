import React, { useState } from "react";
import Home from "./home";
import Login from "./login";
import Dashboard from "./dashboard";
const Nav = () => {
  const [route, setRoute] = useState("/");
  const adminAccess = () => {
    if (route === "/") {
      setRoute("/login");
      document.getElementById("toggleBtn").innerHTML = "الرئيسية";
    }
    if (route === "/login") {
      setRoute("/");
      document.getElementById("toggleBtn").innerHTML = "الادارة";
    }
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light float-right ">
        <a
          className="navbar-brand "
          style={{cursor:'pointer'}}
          id="toggleBtn"
          onClick={() => {
            adminAccess();
          }}
        >
          {" "}
          الادارة
        </a>
      </nav>
      {route === "/" ? <Home /> : route==="/login"? <Login route={route}/>:<Dashboard route={route}/>}
    </div>
  );
};

export default Nav;
