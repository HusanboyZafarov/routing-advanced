import React from 'react'
import { Link, useParams } from "react-router-dom";
import Card from '../components/Card';

const PostUserDetail = ({ posts, users }) => {
  const { id } = useParams();
  const user = users[id - 1]
  const filteredPosts = posts.filter(p => p.authorId === user.id)
  return (

    <>
      <div className="container mt-4">

        <div>

          <Link to="/" className="btn btn-secondary mb-3">
            Back to Home
          </Link>
          <h2>User Information</h2>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>First Name:</strong>  {user.first_name}
          </p>
          <p>
            <strong>Last Name:</strong> {user.last_name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
        </div>
        <div className="d-flex gap-3 flex-wrap ">
          {filteredPosts.map((post) => (
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
    </>
  )
}

export default PostUserDetail
