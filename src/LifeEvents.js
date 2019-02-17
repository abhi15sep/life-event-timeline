import React from "react";

var today = new Date().toISOString().slice(0, 10);
var futureDay = new Date(Date.now() + 1000 * 60 * 60 * 24 * 10 * 6)
  .toISOString()
  .slice(0, 10);

export default {
  relationships: [
    { name: "Cole", start: "2016-01-30", end: "2018-10-15", color: "pink" },
    {
      name: "Single Adventures",
      start: "2013-09-21",
      end: "2015-05-30",
      color: "pink"
    },
    { name: "Will", start: "2015-06-01", end: "2015-11-20", color: "pink" },
    { name: "Jake", start: "2008-11-20", end: "2013-09-20", color: "pink" }
  ],
  today: [{ name: "_", start: today, end: futureDay, color: "#90eea8" }],
  firstProgrammingClass: [
    {
      name: "First Programming Class",
      start: "2011-09-01",
      end: "2011-09-01",
      color: "#90eea8"
    }
  ],
  education: [
    {
      name: "Elementary School",
      start: "1996-09-01",
      end: "2002-06-12",
      color: "#ADD8E6"
    },
    {
      name: "Middle School",
      start: "2002-09-01",
      end: "2005-06-12",
      color: "#ADD8E6"
    },
    {
      name: "High School",
      start: "2005-09-01",
      end: "2009-06-12",
      color: "#ADD8E6"
    },
    {
      name: "University",
      start: "2009-09-01",
      end: "2013-06-11",
      color: "#ADD8E6"
    }
  ],
  // retirement: [
  //   { name: "Planned Date", start: "", end: "none" } // For milestones use end: "none"
  // ],
  jobs: [
    {
      name: "DOE Internship",
      start: "2012-06-10",
      end: "2012-09-10",
      color: "orange"
    },
    {
      name: "POS-X Internship",
      start: "2013-04-01",
      end: "2013-06-10",
      color: "orange"
    },
    { name: "Vitech", start: "2013-07-01", end: "2015-03-02", color: "orange" },
    {
      name: "Conversica",
      start: "2015-04-20",
      end: "2017-11-10",
      color: "orange"
    },
    { name: "10Kft", start: "2017-11-27", end: "2019-02-22", color: "orange" }
  ]
};
