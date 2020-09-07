import React, { useState, useEffect } from "react";
const ClassLists = () => {
  const [homeroom, setHomeroom] = useState("");
  const [type, setType] = useState("");
  const [group, setGroup] = useState("");
  const getGroup =async () => {
    try {
        const response = await fetch("https://mutanabi.herokuapp.com/count");
        const jsonData = await response.json();
      if (type !== "DL" || type !== "school") {
        const group = jsonData.filter(
          (s) => s.home === homeroom && s.edutype === type
        );
      }
      const group = jsonData.filter((s) => s.grade === type);

      console.log(group);
    } catch (err) {
      console.log(err.message);
    }
  };

  //   useEffect(() => {

  //   }, []);

  const exportPdf = () => {
    getGroup();
  };
  const exportxls = () => {};
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>

            <th scope="col" className="text-center">
              {" "}
              عن بعد
            </th>
            <th scope="col" className="text-center">
              واقعي
            </th>
            <th scope="col" className="text-center">
              الكل
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <div class="form-group">
                <select
                  class="form-control"
                  onChange={(e) => setHomeroom(e.target.value)}
                >
                  <option value="na"></option>
                  <option value="5A">5A</option>
                  <option value="5B">5B</option>
                  <option value="5C">5C</option>
                  <option value="5D">5D</option>
                  <option value="5E">5E</option>
                  <option value="5F">5F</option>
                </select>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={() => exportPdf()}
                  onMouseEnter={() => {
                    setType("DL");
                  }}
                >
                  PDF
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    exportxls();
                  }}
                  onMouseEnter={() => {
                    setType("DL");
                  }}
                >
                  XLS
                </button>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={() => exportPdf()}
                  onMouseEnter={() => {
                    setType("school");
                  }}
                >
                  PDF
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    exportxls();
                  }}
                  onMouseEnter={() => {
                    setType("school");
                  }}
                >
                  XLS
                </button>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={() => exportPdf()}
                  onMouseEnter={() => {
                    setType("Grade 5");
                  }}
                >
                  PDF
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    exportxls();
                  }}
                  onMouseEnter={() => {
                    setType("Grade 5");
                  }}
                >
                  XLS
                </button>
              </div>
            </td>
          </tr>
          {/* grade 6................................... */}
          <tr>
            <td>
              {" "}
              <div class="form-group">
                <select
                  class="form-control"
                  onChange={(e) => {
                    setHomeroom(e.target.value);
                  }}
                >
                  <option value="na"></option>
                  <option value="6A">6A</option>
                  <option value="6B">6B</option>
                  <option value="6C">6C</option>
                  <option value="6D">6D</option>
                  <option value="6E">6E</option>
                  <option value="6F">6F</option>
                  <option value="6G">6G</option>
                </select>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={() => exportPdf()}
                  onMouseEnter={() => {
                    setType("DL");
                  }}
                >
                  PDF
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    exportxls();
                  }}
                  onMouseEnter={() => {
                    setType("DL");
                  }}
                >
                  XLS
                </button>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={() => exportPdf()}
                  onMouseEnter={() => {
                    setType("school");
                  }}
                >
                  PDF
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    exportxls();
                  }}
                  onMouseEnter={() => {
                    setType("school");
                  }}
                >
                  XLS
                </button>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={() => exportPdf()}
                  onMouseEnter={() => {
                    setType("Grade 6");
                  }}
                >
                  PDF
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    exportxls();
                  }}
                  onMouseEnter={() => {
                    setType("Grade 6");
                  }}
                >
                  XLS
                </button>
              </div>
            </td>
          </tr>

          {/* grade 7................................... */}
          <tr>
            <td>
              {" "}
              <div class="form-group">
                <select
                  class="form-control"
                  onChange={(e) => {
                    setHomeroom(e.target.value);
                  }}
                >
                  <option value="na"></option>
                  <option value="7A">7A</option>
                  <option value="7B">7B</option>
                  <option value="7C">7C</option>
                  <option value="7D">7D</option>
                  <option value="7E">7E</option>
                  <option value="7F">7F</option>
                  <option value="7G">7G</option>
                  <option value="7H">7H</option>
                  <option value="7I">7I</option>
                  <option value="7J">7J</option>
                </select>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={() => exportPdf()}
                  onMouseEnter={() => {
                    setType("DL");
                  }}
                >
                  PDF
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    exportxls();
                  }}
                  onMouseEnter={() => {
                    setType("DL");
                  }}
                >
                  XLS
                </button>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={() => exportPdf()}
                  onMouseEnter={() => {
                    setType("school");
                  }}
                >
                  PDF
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    exportxls();
                  }}
                  onMouseEnter={() => {
                    setType("school");
                  }}
                >
                  XLS
                </button>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={() => exportPdf()}
                  onMouseEnter={() => {
                    setType("Grade 7");
                  }}
                >
                  PDF
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    exportxls();
                  }}
                  onMouseEnter={() => {
                    setType("Grade 7");
                  }}
                >
                  XLS
                </button>
              </div>
            </td>
          </tr>
          {/* grade 8................................... */}
          <tr>
            <td>
              {" "}
              <div class="form-group">
                <select
                  class="form-control"
                  onChange={(e) => {
                    setHomeroom(e.target.value);
                  }}
                >
                  <option value="na"></option>
                  <option value="8A">8A</option>
                  <option value="8B">8B</option>
                  <option value="8C">8C</option>
                  <option value="8D">8D</option>
                  <option value="8E">8E</option>
                  <option value="8F">8F</option>
                  <option value="8G">8G</option>
                  <option value="8H">8H</option>
                </select>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={() => exportPdf()}
                  onMouseEnter={() => {
                    setType("DL");
                  }}
                >
                  PDF
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    exportxls();
                  }}
                  onMouseEnter={() => {
                    setType("DL");
                  }}
                >
                  XLS
                </button>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={() => exportPdf()}
                  onMouseEnter={() => {
                    setType("school");
                  }}
                >
                  PDF
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    exportxls();
                  }}
                  onMouseEnter={() => {
                    setType("school");
                  }}
                >
                  XLS
                </button>
              </div>
            </td>
            <td>
              {" "}
              <div>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={() => exportPdf()}
                  onMouseEnter={() => {
                    setType("Grade 8 ");
                  }}
                >
                  PDF
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    exportxls();
                  }}
                  onMouseEnter={() => {
                    setType("Grade 8 ");
                  }}
                >
                  XLS
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ClassLists;
