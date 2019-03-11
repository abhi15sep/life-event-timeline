import React from "react";
import { render } from "react-dom";
import Row from "./Row";
import Headers from "./Headers";
import styles from "./styles.css";
import Lines from "./Lines";
import Key from "./Legend";

import {
  getEndDateMinusOneDay,
  getToday,
  dayDiff,
  getAge
} from "./DateHelpers";

const App = ({ birthdate }) => (
  <div style={{ textAlign: "center", padding: "50px 500px" }}>
    <div>
      <Headers birthdate={birthdate} />
      <Key color="pink" title="Relationships" />
      <Key color="orange" title="Jobs" />
      <Key color="#ADD8E6" title="Education" />
      <Key color="#90eea8" title="Today" />
    </div>
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px' }}>Menu TBD</div>
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

render(<App birthdate="1991-06-12" />, document.getElementById("root"));
