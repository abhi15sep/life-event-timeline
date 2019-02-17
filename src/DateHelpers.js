import React from "react";

export const getEndDateMinusOneDay = (endYear, birthdate) => {
  const end = endYear + birthdate.substr(birthdate.length - 6);
  let myDate = new Date(end);
  let dayOfMonth = myDate.getDate();
  myDate.setDate(dayOfMonth - 1);
  myDate = addYears(myDate, 10);
  return myDate;
};

export const addYears = (date, years) => {
  var newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate.toISOString().split("T")[0];
};

export const getToday = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

export const dayDiff = (first, second) => {
  var date1 = new Date(first);
  var date2 = new Date(second);
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
};

const getAge = dob => {
  var birthday = +new Date(dob);
  return ~~((Date.now() - birthday) / 31557600000);
};

export default addYears;
