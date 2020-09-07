import React, { useState, useEffect } from "react";
import ClassLists from "./classLists";
const Dashboard = () => {
  const [grade5DL, setGrade5Dl] = useState("");
  const [grade6DL, setGrade6Dl] = useState("");
  const [grade7DL, setGrade7Dl] = useState("");
  const [grade8DL, setGrade8Dl] = useState("");
  const [grade5sc, setGrade5sc] = useState("");
  const [grade6sc, setGrade6sc] = useState("");
  const [grade7sc, setGrade7sc] = useState("");
  const [grade8sc, setGrade8sc] = useState("");
  const [a, seta] = useState(0);
  const [students, setStudents] = useState([]);
  const getCounts = async () => {
    try {
      const response = await fetch("https://mutanabi.herokuapp.com/count");
      const jsonData = await response.json();
      setStudents(jsonData);
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

      const arrgrade8DL = jsonData.filter((s) => s.grade === "Grade 8 ");
      setGrade8Dl(arrgrade8DL.length);
      
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
        (s) => s.grade === "Grade 8 " && s.edutype === "school"
      );
      setGrade8sc(arrgrade8sc.length);
      seta(1);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCounts();
  }, []);
  return (
    <div>
      {a === 1 ? (
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">عن بعد</th>
                <th scope="col">واقعي</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Grade 5</th>
                <td>
                  {grade5DL} (
                  {Math.round((grade5DL / (grade5DL + grade5sc)) * 100)}
                  %)
                </td>
                <td>
                  {grade5sc} (
                  {100 - Math.round((grade5DL / (grade5DL + grade5sc)) * 100)}%)
                </td>
              </tr>
              <tr>
                <th scope="row">Grade 6</th>
                <td>
                  {grade6DL} (
                  {Math.round((grade6DL / (grade6DL + grade6sc)) * 100)}
                  %)
                </td>
                <td>
                  {grade6sc} (
                  {100 - Math.round((grade6DL / (grade6DL + grade6sc)) * 100)}%)
                </td>
              </tr>
              <tr>
                <th scope="row">Grade 7</th>
                <td>
                  {grade7DL} (
                  {Math.round((grade7DL / (grade7DL + grade7sc)) * 100)}
                  %)
                </td>
                <td>
                  {grade7sc} (
                  {100 - Math.round((grade7DL / (grade7DL + grade7sc)) * 100)}%)
                </td>
              </tr>
              <tr>
                <th scope="row">Grade 8</th>
                <td>
                  {grade8DL} (
                  {Math.round((grade8DL / (grade8DL + grade8sc)) * 100)}
                  %)
                </td>
                <td>
                  {grade8sc} (
                  {100 - Math.round((grade8DL / (grade8DL + grade8sc)) * 100)}%)
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <button
              type="button"
              className="btn btn-info mr-1"
              style={{ width: 150 }}
            >
              طباعة قوائم
            </button>

            <button
              type="button"
              className="btn btn-danger"
              style={{ width: 150 }}
            >
              تغير نوع تعلم طالب
            </button>
          </div>
        </div>
      ) : (
        <>
          <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>{" "}
        </>
      )}

      <ClassLists
  students={students}
      />
    </div>
  );
};

export default Dashboard;
