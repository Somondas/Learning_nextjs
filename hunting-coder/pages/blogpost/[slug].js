import React from 'react';
import { useRouter } from 'next/router';
import styles from "../../styles/Blog.module.css";

const slug = () => {
    const router = useRouter();
    const {slug} = router.query;

  return (
    <div className={styles.blogPost}>
      <h1>Title: {slug}</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi numquam animi officiis nemo aliquam veritatis modi rerum officia! Sunt dolores illum dolor modi distinctio iste cumque aut quos vel.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui amet cum officia eos possimus rerum similique sequi quisquam voluptatum quibusdam quaerat earum, dolores eum, nobis, magni dicta. Assumenda, rem fugit!</p>
      </div>
  )
}

export default slug