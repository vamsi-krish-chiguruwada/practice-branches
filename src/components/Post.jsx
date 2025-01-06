import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <li className={classes.post}>
      <p>{props.name}</p>
      <p>{props.message}</p>
    </li>
  );
};

export default Post;
