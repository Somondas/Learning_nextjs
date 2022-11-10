import Link from 'next/link'
import React from 'react'
import styles from '../styles/Blog.module.css'
// ||||||||||||                                                                                                     

// Todo: Step 1: Collect all the files from blogdata directory
// Todo: Itrate through them and display
const Blog = () => {
  return (
    <main className={styles.main}>
      <h1>Blogs</h1>
    <div className={styles.grid}>
      
      <div className="blogs">
        <div className="blogItems">
          <Link href="/blogpost/learn-javascript"><h2>How to learn web-development in 2022?</h2></Link>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aliquid, obcaecati ad consectetur sequi consequuntur alias expedita modi, at ab minima sapiente sit eligendi quibusdam. Laborum sit et error vel?</p>
        </div>
        <div className="blogItems">
          <h2>How to learn web-development in 2022?</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aliquid, obcaecati ad consectetur sequi consequuntur alias expedita modi, at ab minima sapiente sit eligendi quibusdam. Laborum sit et error vel?</p>
        </div>
        <div className="blogItems">
          <h2>How to learn web-development in 2022?</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aliquid, obcaecati ad consectetur sequi consequuntur alias expedita modi, at ab minima sapiente sit eligendi quibusdam. Laborum sit et error vel?</p>
        </div>
        <div className="blogItems">
          <h2>How to learn web-development in 2022?</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aliquid, obcaecati ad consectetur sequi consequuntur alias expedita modi, at ab minima sapiente sit eligendi quibusdam. Laborum sit et error vel?</p>
        </div>
      </div>
    </div>
    </main>
  )
}

export default Blog