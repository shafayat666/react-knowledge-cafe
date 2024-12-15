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
    <div className="w-2/3">
      <h1 className="text-4xl">Blogs {blogs.length}</h1>
    </div>
  );
};

export default Blogs;