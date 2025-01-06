import classes from "./NewPost.module.css";
import { useState } from "react";
const NewPost = (props) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={(e) => props.setPostText(e.target.value)}
          value={props.postText}
        />
      </p>
      <p>
        <label htmlFor="name">Vamsi Krish</label>
        <input
          type="text"
          id="name"
          required
          onChange={(e) => props.setAuthorText(e.target.value)}
          value={props.postAuthor}
        />
      </p>
    </form>
  );
};

export default NewPost;
