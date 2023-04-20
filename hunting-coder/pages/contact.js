import React, { use, useState as UseState } from 'react'
import styles from "../styles/Contact.module.css";
const contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    console.log('change')
  }
  const [name, setName] = UseState("");
  const [desc, setDesc] = UseState("")
  const [email, setEmail] = UseState('')
  const [phone, setPhone] = UseState('')

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.formlabel}>Email address</label>
          <input type="text" className="form-control" id="name" name='name' onChange={handleChange} value={name} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputPassword1" className={styles.formlabel}>Password</label>
          <input type="email" className="form-control" onChange={handleChange} value={email} id="password" name='password' />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputPassword1" className={styles.formlabel}>Password</label>
          <input type="number" className="form-control" onChange={handleChange} value={phone} id="password" name='password' />
        </div>
        <div className="form-floating">
          <label htmlFor="floatingTextarea2">Comments</label>
          <textarea className="form-control" placeholder="Leave a comment here" onChange={handleChange} value={desc} id="comments" name='comment' style={{ height: "100px", }}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default contact