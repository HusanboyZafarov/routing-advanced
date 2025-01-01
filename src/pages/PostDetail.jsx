import React from "react";
import { Link, useParams } from "react-router-dom";

const PostDetail = ({ posts, authors }) => {
  const { id } = useParams();
  const { title, post_details, genre, rate, likes, date, authorId } =
    posts[id - 1];
  const author = authors[authorId - 1];

  return (
    <div className="container">
      <Link to="/" className="btn btn-secondary my-3">
        Back to Home
      </Link>
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">
            <p className="text-decoration-none" to={`/post/${id}`}>
              {title}
            </p>
          </h5>
          <p className="card-text">{post_details}</p>
          <div className="d-flex gap-2 my-2">
            <span className="btn btn-info">{genre}</span>
            <span className="btn btn-warning text-white">
              {rate.toFixed(2)} <i className="fa-solid fa-star"></i>
            </span>
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
            <span>1 years ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
