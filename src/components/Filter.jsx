import React from "react";

const Filter = ({ options, filter, handleFilterPosts }) => {
  const getClass = (id) => {
    return id === filter ? "list-group-item active" : "list-group-item";
  };

  return (
    <ul className="list-group">
      {options.map((option) => (
        <li
          key={option.id}
          style={{ cursor: "pointer" }}
          onClick={() => handleFilterPosts(option.id)}
          className={getClass(option.id)}
        >
          {option.name}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
