import React from "react";

export default ({ color, title }) => (
  <div style={{ display: "flex" }}>
    <div
      style={{
        backgroundColor: color,
        borderRadius: "10px",
        fontFamily: "IBM Plex Sans, sans-serif",
        fontWeight: "300",
        marginTop: "5px",
        // marginLeft: z.marginLeft + "%",
        // marginRight: 15 + "%",
        minWidth: "15px",
        width: "20px",
        alignSelf: "center"
      }}
    >
      &nbsp;
    </div>
    <div style={{ marginTop: "7px", marginLeft: "5px" }}>{title}</div>
  </div>
);
