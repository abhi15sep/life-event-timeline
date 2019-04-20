import React from "react";
import {
  getEndDateMinusOneDay,
  getToday,
  dayDiff,
  getAge
} from "./DateHelpers";
import round from "lodash/round";
import LifeEvents from "./LifeEvents";

const getLifeEventsShape = (start, end) => {
  return Object.values([
    ...LifeEvents.relationships,
    ...LifeEvents.education,
    ...LifeEvents.groups,
    ...LifeEvents.albums,
    ...LifeEvents.jobs,
    ...LifeEvents.kids,
    // ...LifeEvents.today,
    // ...LifeEvents.firstProgrammingClass
  ]).map(x => {
    let shouldShow =
      (x.start >= start && x.end <= end) || (x.start <= end && x.end >= start);
    if (x.end === "present") {
      shouldShow = getToday() >= start && getToday() <= end ? true : false;
      x.end = getToday();
    }
    let marginLeft = "0px";
    let marginRight = "0px";
    if (shouldShow) {
      marginLeft =
        x.start < start
          ? 0
          : Math.abs(round(dayDiff(x.start, start) / 3650, 2)) * 100;
      marginRight =
        x.end > end ? 0 : Math.abs(round(dayDiff(x.end, end) / 3650, 2)) * 100;
    }
    return {
      shouldShow: shouldShow,
      marginLeft: marginLeft - 0.5,
      marginRight: marginRight - 0.5,
      name: x.name,
      color: x.color
    };
  });
};

const getLifeEvents = (birthdate, startYear, endYear) => {
  const start = startYear + birthdate.substr(birthdate.length - 6);
  const end = getEndDateMinusOneDay(startYear, birthdate);
  return getLifeEventsShape(start, end);
};

export default ({ linesArray, birthdate, rows }) =>
  [...linesArray].map((x, columnsFirst) =>
    getLifeEvents(
      birthdate,
      parseInt(birthdate.substring(0, 4)) + columnsFirst + rows * 10,
      parseInt(birthdate.substring(0, 4)) + columnsFirst + rows * 10 + 10
    ).map((z, lifeEvents) => (
      <div
        style={{
          backgroundColor: z.color,
          borderRadius: "10px",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: "300",
          marginTop: "5px",
          marginLeft: z.marginLeft + "%",
          marginRight: z.marginRight + "%",
          minWidth: "15px"
        }}
      >
        {z.shouldShow && z.name}
      </div>
    ))
  );
