import React from "react";
import { render } from "react-dom";
import Row from "./Row";
import Headers from "./Headers";
import Lines from "./Lines";
import Key from "./Legend";

const App = ({ birthdate }) => (
  <div style={{ textAlign: "center", padding: "50px 500px" }}>
      <Headers birthdate={birthdate} />
      <div style={{ display: "flex" }}>
        <Key color="pink" title="Relationships" />
        <Key color="#ADD8E6" title="Education" />
        <Key color="orange" title="Groups" />
        <Key color="#90eea8" title="Albums" />
        <Key color="#f9d849" title="Companies" />
        <Key color="#e5adef" title="Kids" />
      </div>
    <div style={{ display: 'flex' }}>
      {/* <div style={{ width: '200px' }}> FUTURE SIDE MENU </div> */}
      <div style={{ width: '1000px' }}>
        {[...Array(10)].map((x, rows) => (
          <div>
            <div>
              <Lines linesArray={Array(1)} birthdate={birthdate} rows={rows} />
            </div>
            <div>
              <div
                style={{
                  borderBottom: "1px solid #DCDCDC",
                  height: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "4px 10px"
                }}
              >
                {[...Array(10)].map((x, columns) => (
                  <Row
                    year={
                      parseInt(birthdate.substring(0, 4)) + columns + 10 * rows
                    }
                    age={columns - 11}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

render(<App birthdate="1981-09-04" />, document.getElementById("root"));
