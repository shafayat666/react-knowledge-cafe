import { useState, useEffect } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res =>  res.json())
      .then(data => setBlogs(data))
      .catch(error => console.error("Fetch Error:", error));
  }, []);

  return (
    <div>

    </div>
  );
};

export default Blogs;