import { useState, useEffect } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(error => console.error("Fetch Error:", error));
  }, []);

  return (
    <div className="w-2/3">
      <h1 className="text-4xl">Blogs {blogs.length}</h1>
      {
        blogs.map((blog, index) => <Blog
          key={index}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}

          ></Blog>)
      }
    </div>
  );
};

Blogs.propTypes = {
  blog: PropTypes.object,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}

export default Blogs;