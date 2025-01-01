import React from "react";
import author_data from "../data/user_data";
import { Link } from "react-router-dom";
import GenreCard from "./GenreCard";
import RateCard from "./RateCard";
import TimeText from "./TimeText";

const Card = ({
  id,
  title,
  post_details,
  rate,
  date,
  authorId,
  genre,
  likes,
}) => {
  const author = author_data[authorId - 1];

  return (
    <div className="card" style={{ width: "calc(50% - 10px)" }}>
      <div className="card-body">
        <h5 className="card-title">
          <Link className="text-decoration-none" to={`/post/${id}`}>
            {title.slice(0, 50)}...
          </Link>
        </h5>
        <p className="card-text">{post_details.slice(0, 200)}</p>
        <div className="d-flex gap-2 my-2">
          <GenreCard genre={genre} />

          <RateCard rate={rate} />

          <span className="btn btn-danger">
            {likes} <i className="fa-solid fa-heart"></i>
          </span>

          <span className="btn btn-light">{date}</span>
        </div>
        <div className="d-flex gap-2 mt-5 justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center">
            <Link to={`/post-user/detail/${id}`} className="text-dark text-decoration-none">
              <span
                className="bg-light text-dark rounded-circle text-decoration-none d-inline-flex justify-content-center align-items-center"
                style={{ width: "32px", height: "32px" }}
              >
                {author.first_name[0]}
              </span>
              {author.first_name} {author.last_name}
            </Link>
          </div>
          <TimeText date={date} />
        </div>
      </div>
    </div>
  );
};

export default Card;
