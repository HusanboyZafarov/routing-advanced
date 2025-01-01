import React from "react";

const GenreCard = ({ genre }) => {
  const handleGetColor = (genre) => {
    switch (genre) {
      case "Action":
        return "secondary";
      case "Romance":
        return "danger";
      case "Horror":
        return "dark";
      case "Drama":
        return "primary";
      case "Comedy":
        return "warning";
    }
  };
  return <span className={"btn btn-" + handleGetColor(genre)}>{genre}</span>;
};

export default GenreCard;
