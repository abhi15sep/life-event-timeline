import React from "react";

var today = new Date().toISOString().slice(0, 10);
var futureDay = new Date(Date.now() + 1000 * 60 * 60 * 24 * 10 * 6)
  .toISOString()
  .slice(0, 10);

export default {
  relationships: [
    { name: "Jay-Z", start: "2001-11-01", end: "present", color: "pink" },
  ],
  education: [
    {
      name: "St. Mary’s Elementary School",
      start: "1987-09-01",
      end: "1990-06-12",
      color: "#ADD8E6"
    },
    {
      name: "Parker Elementary School",
      start: "1990-09-01",
      end: "1994-06-12",
      color: "#ADD8E6"
    },
    {
      name: "Kinder High School for the Performing and Visual Arts",
      start: "1994-09-01",
      end: "1996-06-12",
      color: "#ADD8E6"
    },
    {
      name: "Alief Elsik High School",
      start: "1996-09-01",
      end: "1998-06-12",
      color: "#ADD8E6"
    },
  ],
  kids: [
    {
      name: "Blue Ivy Carter",
      start: "2012-01-07",
      end: "present",
      color: "#e5adef"
    },
    {
      name: "Rumi Carter",
      start: "2017-06-13",
      end: "present",
      color: "#e5adef"
    },
    {
      name: "Sir Carter",
      start: "2017-06-13",
      end: "present",
      color: "#e5adef"
    },
  ],
  jobs: [
    {
      name: "Owner of Ivy Park",
      start: "2016-03-31",
      end: "present",
      color: "#f9d849"
    }
  ],
  groups: [
    {
      name: "Destiny's Child",
      start: "1996-01-01",
      end: "2006-01-01",
      color: "orange"
    },
    {
      name: "Solo Artist",
      start: "2006-01-01",
      end: "present",
      color: "orange"
    },
    {
      name: "The Carters",
      start: "2018-06-16",
      end: "present",
      color: "orange"
    },
  ],
  albums: [
    {
      name: "Destiny's Child",
      start: "1998-02-17",
      end: "1999-07-26",
      color: "#90eea8"
    },
    {
      name: "The Writing's On The Wall",
      start: "1999-07-27",
      end: "2001-04-30",
      color: "#90eea8"
    },
    {
      name: "Survivor",
      start: "2001-05-01",
      end: "2001-10-29",
      color: "#90eea8"
    },
    {
      name: "8 Days of Christmas",
      start: "2001-10-30",
      end: "2004-11-15",
      color: "#90eea8"
    },
    {
      name: "Destiny Fulfilled",
      start: "2004-11-16",
      end: "2006-08-31",
      color: "#90eea8"
    },
    {
      name: "Dangerously In Love",
      start: "2003-06-23",
      end: "2006-08-31",
      color: "#90eea8"
    },
    {
      name: "B'Day",
      start: "2006-09-01",
      end: "2008-11-11",
      color: "#90eea8"
    },
    {
      name: "I Am... Sasha Fierce",
      start: "2008-11-12",
      end: "2011-06-23",
      color: "#90eea8"
    },
    {
      name: "4",
      start: "2011-06-24",
      end: "2013-12-12",
      color: "#90eea8"
    },
    {
      name: "Beyoncé",
      start: "2013-12-13",
      end: "2016-04-22",
      color: "#90eea8"
    },
    {
      name: "Lemonade",
      start: "2016-04-23",
      end: "present",
      color: "#90eea8"
    },
  ]
};
