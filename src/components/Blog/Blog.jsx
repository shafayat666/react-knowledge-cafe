import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";


const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const { title, cover_image, author_image, author, reading_time, posted_date, hashtags } = blog;

  return (
    <div className="mb-20 space-y-4">
      <img className="w-full mb-8" src={cover_image}></img>
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_image}></img>
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)} 
            className="ml-2 text-red-600 text-2xl">
            <CiBookmark></CiBookmark></button>
        </div>

      </div>
      <h2 className="text-4xl">
        {title}
      </h2>
      <p>
        {
          hashtags.map((hash, index) => <span key={index}><a href=''>{hash}</a></span>)
        }
      </p>
      <button 
      onClick={() => handleMarkAsRead(reading_time)}
      className="text-purple-800 font-bold underline">Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}

export default Blog;