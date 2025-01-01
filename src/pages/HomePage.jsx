import React from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";

const HomePage = ({ options, filter, posts, handleFilterPosts }) => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-2">
          <Filter
            options={options}
            filter={filter}
            handleFilterPosts={handleFilterPosts}
          />
        </div>
        <div className="col">
          <div className="d-flex gap-3 flex-wrap ">
            {posts.map((post) => (
              <Card
                key={post.id}
                id={post.id}
                title={post.title}
                post_details={post.post_details}
                genre={post.genre}
                date={post.date}
                likes={post.likes}
                rate={post.rate}
                authorId={post.authorId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

