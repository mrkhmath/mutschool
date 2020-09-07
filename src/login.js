import React, { useState, useEffect } from "react";
import "./login.css";
import logo from "./logo512.JPG";
import Dashboard from "./dashboard";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState("");
  const [route2, setroute2] = useState("/login");
  const handleSignin = async () => {
    try {
      const response = await fetch(
        "https://aqueous-lake-48246.herokuapp.com/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ erp: username }),
        }
      );

      const jsonData = await response.json();

      if (jsonData.erp === username && jsonData.erp === password) {
        setroute2("./dashboard");
      } else {
        document.getElementById("warning").innerHTML =
          "*تأكد من اسم المستخدم وكلمة المرور";
      }
    } catch (err) {
      document.getElementById("warning").innerHTML =
        "*تأكد من اسم المستخدم وكلمة المرور";
    }
  };
  return (
    <div>
      {route2 === "/login" ? (
        <div className="text-center">
          <div className="form-signin">
            <img className="mb-4" src={logo} alt="" width="72" height="72" />
            <h5>مدرسة المتنبي</h5>
            <h1 className="h3 mb-3 font -weight-normal mt-3 ">
              {" "}
              نظام ادارة التعلم الهجين
            </h1>

            <input
              type="email"
              id="inputEmail"
              className="form-control mt-5"
              placeholder="اسم المستخدم"
              required={true}
              autoFocus={true}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <input
              type="password"
              id="inputPassword"
              className="form-control mt-3"
              placeholder="كلمة المرور"
              required={true}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <h6 className="text-danger" id="warning"></h6>
            <button
              className="btn btn-lg btn-danger btn-block mt-3"
              type="submit"
              onClick={() => {
                handleSignin();
              }}
            >
              دخول
            </button>
            <p className="mt-5 mb-3 text-muted">© 2020-2021</p>
          </div>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Login;
