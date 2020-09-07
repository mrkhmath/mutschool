import React, { useState, useEffect } from "react";
const Dashboard = (user) => {
  const [grade5DL, setGrade5Dl] = useState("");
  const [grade6DL, setGrade6Dl] = useState("");
  const [grade7DL, setGrade7Dl] = useState("");
  const [grade8DL, setGrade8Dl] = useState("");
  const [grade5sc, setGrade5sc] = useState("");
  const [grade6sc, setGrade6sc] = useState("");
  const [grade7sc, setGrade7sc] = useState("");
  const [grade8sc, setGrade8sc] = useState("");
  const getCounts = async () => {
    try {
      const response = await fetch("https://mutanabi.herokuapp.com/count");
      const jsonData = await response.json();
      const arrgrade5DL = jsonData.filter(
        (s) => s.grade === "Grade 5" && s.edutype === "DL"
      );
      setGrade5Dl(arrgrade5DL.length);
         const arrgrade6DL = jsonData.filter(
        (s) => s.grade === "Grade 6" && s.edutype === "DL"
      );
    
      setGrade6Dl(arrgrade6DL.length);

      const arrgrade7DL = jsonData.filter(
        (s) => s.grade === "Grade 7" && s.edutype === "DL"
      );
      setGrade7Dl(arrgrade7DL.length);

      const arrgrade8DL = jsonData.filter(
        (s) => s.grade === "Grade 8" 
      );
      setGrade8Dl(arrgrade8DL.length);
console.log(arrgrade8DL)
      //school students
      const arrgrade5sc = jsonData.filter(
        (s) => s.grade === "Grade 5" && s.edutype === "school"
      );
      setGrade5sc(arrgrade5sc.length);

      const arrgrade6sc = jsonData.filter(
        (s) => s.grade === "Grade 6" && s.edutype === "school"
      );
      setGrade6sc(arrgrade6sc.length);

      const arrgrade7sc = jsonData.filter(
        (s) => s.grade === "Grade 7" && s.edutype === "school"
      );
      setGrade7sc(arrgrade7sc.length);

      const arrgrade8sc = jsonData.filter(
        (s) => s.grade === "Grade 8" && s.edutype === "school"
      );
      setGrade8sc(arrgrade8sc.length);
    } catch (err) { }
  };

  useEffect(() => {
    getCounts();
  }, []);
  return (
    <div>
      <h3>
        عدد طلاب خامس عن بعد<span> = {grade5DL}</span>
      </h3>
      <br></br>
      <h3>
        عدد طلاب خامس عن واقعي<span> = {grade5sc}</span>
      </h3>
      <hr></hr>
      <br></br>
      <h3>
        عدد طلاب سادس عن بعد<span> = {grade6DL}</span>
      </h3>
      <br></br>
      <h3>
        عدد طلاب سادس عن واقعي<span> = {grade6sc}</span>
      </h3>
      <hr></hr>
      <br></br>
      <h3>
        عدد طلاب سابع عن بعد<span> = {grade7DL}</span>
      </h3>
      <br></br>
      <h3>
        عدد طلاب سابع عن واقعي<span> = {grade7sc}</span>
      </h3>
      <hr></hr>
      <br></br>
      <h3>
        عدد طلاب ثامن عن بعد<span> = {grade8DL}</span>
      </h3>

      <br></br>
      <h3>
        عدد طلاب ثامن عن واقعي<span> = {grade8sc}</span>
      </h3>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default Dashboard;
