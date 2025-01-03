import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import genre_data from "./data/genre_data";
import post_data from "./data/post_data";
import user_data from "./data/user_data";
import current_u_data from "./data/current_u_data";
import HomePage from "./pages/HomePage";
import PostDetail from "./pages/PostDetail";
import UserPage from "./pages/UserDetail";
import PostUserDetail from "./pages/PostUserDetail";

function App() {
  const [filteredPosts, setFiltered] = useState(null);
  const [filter, setFilter] = useState(-1);
  const loadingBarRef = useRef(null);

  const options = genre_data;
  const originalPosts = post_data;
  const posts = filteredPosts || originalPosts;

  const handleFilterPosts = (id) => {
    const option = options[id];
    if (id !== -1) {
      const items = originalPosts.filter((p) => p.genre === option.name);
      setFiltered(items);
      setFilter(id);
    } else {
      setFilter(-1);
      setFiltered(null);
    }
  };

  const RouteChangeHandler = () => {
    const location = useLocation();

    loadingBarRef.current?.continuousStart();
    setTimeout(() => {
      loadingBarRef.current?.complete();
    }, 500);

    return null;
  };

  return (
    <Router>
      <LoadingBar className="bg-primary" ref={loadingBarRef} />

      <Navbar author={current_u_data} />

      <RouteChangeHandler />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              handleFilterPosts={handleFilterPosts}
              options={options}
              posts={posts}
              filter={filter}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<PostDetail posts={originalPosts} authors={user_data} />}
        />
        <Route path="/user" element={<UserPage author={current_u_data} />} />
        <Route
          path="post-user/detail/:id"
          element={<PostUserDetail posts={originalPosts} users={user_data} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
