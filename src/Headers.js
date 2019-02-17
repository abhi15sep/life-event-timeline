import React, { Fragment } from "react";

const getAge = dob => {
  var birthday = +new Date(dob);
  return ~~((Date.now() - birthday) / 31557600000);
};

export default ({ birthdate }) => (
  <Fragment>
    <link
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,200,300,400"
      rel="stylesheet"
    />
    <h1
      style={{
        fontFamily: "IBM Plex Sans, sans-serif",
        margin: "-5px",
        textAlign: "center"
      }}
    >
      Your Life in 100 Years
    </h1>
    <h2
      style={{
        fontFamily: "IBM Plex Sans, sans-serif",
        fontWeight: "100",
        margin: "-5px",
        textAlign: "center"
      }}
    >
      Putting your life into perspective. {"\u2728"}
    </h2>
    <h4
      style={{
        fontFamily: "IBM Plex Sans, sans-serif",
        fontWeight: "100",
        textAlign: "center"
      }}
    >
      Your Birthday: {birthdate}
    </h4>
    <h4
      style={{
        fontFamily: "IBM Plex Sans, sans-serif",
        fontWeight: "100",
        marginTop: "-20px",
        textAlign: "center"
      }}
    >
      Your Age: {getAge(birthdate)}
    </h4>
  </Fragment>
);
