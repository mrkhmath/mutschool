import React, { useState } from "react";
import { Fragment } from "react";
const Home = () => {
  const [input, setinput] = useState("");
  const [link, setLink] = useState("");
 
  const getdata = async (num) => {
    try {
      const body = { esis: num };
      const response = await fetch("https://mutanabi.herokuapp.com/st", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const jsonData = await response.json();
      setLink(jsonData.link);
      if (jsonData.edutype === "DL") {
        document.getElementById("edutype").innerHTML = "تعلم عن بعد من المنزل";
        document.getElementById("ename").innerHTML = jsonData.ename;
        document.getElementById("home").innerHTML = jsonData.home;
        document.getElementById("link").innerHTML = "رابط قناة التيمز";
      } else {
        document.getElementById("edutype").innerHTML =
          "تعلم واقعي - من المدرسة";
        document.getElementById("ename").innerHTML = jsonData.ename;
        document.getElementById("home").innerHTML = jsonData.home;
        document.getElementById("link").innerHTML = "رابط قناة التيمز";
      }
    } catch (err) {
      document.getElementById("ename").innerHTML = "يرجي التأكد من رقم الطالب";
      document.getElementById("edutype").innerHTML = "";
      document.getElementById("home").innerHTML = "";
    }
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center mt-5">مدرسة المتنبي </h1>
        <h3 className="text-center mt-5">ادخل رقم الطالب لمعرفة نوع التعلم</h3>
        <div
          className="group-form d-inline-flex p-2"
          style={{ marginLeft: "15%", marginTop: "10%" }}
        >
          <input
            type="text"
            className="form-control"
            onChange={(e) => setinput(e.target.value)}
          />
          <button
            className="btn btn-primary ml-2"
            onClick={() => getdata(input)}
            onMouseEnter={() =>
              (document.getElementById("link").innerHTML = "")
            }
          >
            ابحث
          </button>
        </div>
        <blockquote className="blockquote text-center mt-5 ">
          <h5 id="ename"></h5>
          <h5 id="home"></h5>
          <h5 id="edutype"></h5>
          <a href={link} id="link"></a>
        </blockquote>
      </div>
    </Fragment>
  );
};

export default Home;
