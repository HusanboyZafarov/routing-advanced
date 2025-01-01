import React from "react";

const RateCard = ({ rate }) => {
  const getCardClass = (rate) => {
    if (rate <= 3.5) {
      return "danger";
    } else if (rate >= 3.5 && rate <= 7.5) {
      return "warning";
    } else {
      return "success";
    }
  };

  return (
    <span className={"btn text-white btn-" + getCardClass(rate)}>
      {rate.toFixed(2)} <i className="fa-solid fa-star"></i>
    </span>
  );
};

export default RateCard;
