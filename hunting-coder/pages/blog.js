import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
// ||||||||||||                                                                                                     

// Todo: Step 1: Collect all the files from blogdata directory
// Todo: Itrate through them and display
const Blog = () => {
  // tip: Use useStateSnippit instead of useState in the suggestions
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs").then((a) => {
      return a.json();})
      .then((parsed) => {
      setBlogs(parsed)
    }).catch((e) => console.log(e)) 
  }, [])
  return (
    <main className={styles.main}>
      <h1>Blogs</h1>
      <div className={styles.grid}>
        <div className="blogs">
          {
            blogs.map((blogItems,index)=>{
              return(
                <div className="blogItems" key={index}>
                <Link href={`/blogpost/${blogItems.slug}`}><h2>{blogItems.title}</h2></Link>
                <p>{blogItems.content.substr(0, 300)+ "..."}</p>
              </div>
              )
            })
          }

        </div>
      </div>
    </main>
  )
}

export default Blog