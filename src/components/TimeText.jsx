import React from "react";

const TimeText = ({ date }) => {
  const getText = (date) => {
    const splitted = date.split(".");
    
    const year = Number(splitted[2]);

    const month = Number(splitted[1]);

    if (2024 - year === 0) {
      return `${12 - month} months ago`;
    } else {
      return `${2024 - year} years ago`;
    }
  };

  return <span>{getText(date)}</span>;
};

export default TimeText;
