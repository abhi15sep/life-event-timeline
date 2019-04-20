import React from "react";

export default ({ color, title }) => (
  <div style={{ display: "flex", margin: "0px 0px 15px 0px" }}>
    <div
      style={{
        backgroundColor: color,
        borderRadius: "10px",
        margin: "5px 5px 0px 0px",
        minWidth: "15px",
        width: "20px",
        alignSelf: "center"
      }}
    >
      &nbsp;
    </div>
    <div
      style={{
        margin: "6px 15px 0px 0px",
        fontFamily: "IBM Plex Sans, sans-serif",
        fontWeight: "300"
      }}
    >
      {title}
    </div>
  </div>
);
