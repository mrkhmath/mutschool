import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const ClassLists = () => {
  const [homeroom, setHomeroom] = useState("");
  const [grade, setGrade] = useState("");
  const [type, setType] = useState("");
  const [stu, setStu] = useState([]);
  const options = [];

  const getGroup = async () => {
    setStu([]);
    try {
      const response = await fetch("https://mutanabi.herokuapp.com/count");
      const jsonData = await response.json();
      if (type !== "DL" || type !== "school") {
        const arr = jsonData.filter((s) => s.home === homeroom);

        arr.map((s) => {
          stu.push({ esis: s.esis, Name: s.ename, Class: s.home });
        });
      } else {
        const arr = jsonData.filter(
          (s) => s.home === homeroom && s.edutype === type
        );

        arr.map((s) => {
          stu.push({ esis: s.esis, Name: s.ename, Class: s.home });
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const getoptions = () => {
    if (grade === "Grade 5") {
      options.push(["5A", "5B", "5C", "5D", "5E", "5F", "5ELT1"]);
    } else if (grade === "Grade 6") {
      options.push(["6A", "6B", "6C", "6D", "6E", "6F", "6G", "6H", "6ELT1"]);
    } else if (grade === "Grade 7") {
      options.push([
        "7A",
        "7B",
        "7C",
        "7D",
        "7E",
        "7F",
        "7G",
        "7H",
        "7I",
        "7J",
        "7ELT1",
        "7ELT2",
      ]);
    } else {
      options.push([
        "8A",
        "8B",
        "8C",
        "8D",
        "8E",
        "8F",
        "8G",
        "8H",
        "8ELT1",
        "8ELT2",
      ]);
    }
  };

  const createPdf = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#my-table" });

    doc.autoTable({
      head: [["esis", "Name", "Class"]],
      body: stu,
    });
    doc.save(homeroom + "/" + type);
  };
  useEffect(() => {
    console.log(grade);
    getoptions();

    console.log(options);
  }, [grade]);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>
              <select onChange={(e) => setGrade(e.target.value)}>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8 ">Grade 8</option>
              </select>
              <select id="homeroom">
               
              </select>
              <select>
                <option onSelect={() => setType("DL")}>عن بعد</option>
                <option onSelect={() => setType("school")}>واقعي</option>
                <option onSelect={() => setType(homeroom)}>الكل</option>
              </select>
            </th>
          </tr>
        </tbody>
      </table>

      <table classname="table" id="my-table">
        <thead>
          <tr>
            <th>esis</th>
            <th>Name</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {stu.map((s) => (
            <tr key={s.esis}>
              <td>{s.esis}</td>
              <td>{s.Name}</td>
              <td>{s.Class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClassLists;
