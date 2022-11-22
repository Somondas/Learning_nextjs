import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "../../styles/Blog.module.css";
//tip: Use the browser search bar for removing the \n from a paragraph

// |||||||                                                                                    

// Todo: Step 1: Find the file corresponding to the slug
// Todo: Step 2: Populate them inside the Page
const slug = () => {
  const [blog, setBlog] = useState()
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
      return a.json();
    })
      .then((parsed) => {
      setBlog(parsed)
    }).catch((e) => console.log(e))
  
   
  }, [router.isReady])
  
  

  return (
    <div className={styles.blogPost}>
      <h1>Title: {blog && blog.title}</h1> 
      <hr />
      <p>{blog &&blog.content}</p>
    </div>
  )
}

export default slug