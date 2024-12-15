import { useState } from 'react'
import './App.css'
import Blogs from './components/Header/Blogs/Blogs'
import Bookmarks from './components/Header/Bookmarks/Bookmarks'
import Header from './components/Header/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    setBookmarks(initValue => {
      return [...initValue, blog];
    });
    // const newBookmarks = [...bookmarks, blog];
    // setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    // console.log("marking as read", time)
    setReadingTime(readingTime + time)
  }
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmark={handleAddToBookmark}></Blogs>

        <Bookmarks
          readingTime={readingTime}
         bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
