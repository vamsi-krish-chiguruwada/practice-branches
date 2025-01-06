import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Model from "./Model";
const PostsList = (props) => {
  const [postList, setPostList] = useState([]);
  const [postText, setPostText] = useState("");
  const [postAuthor, setAuthorText] = useState("");
  // const [showModal, setShowModal] = useState(true);
  const handleinput = (event) => {
    event === "submit" &&
      setPostList((postList) => [
        { author: postAuthor, text: postText },
        ...postList,
      ]);
    props.setShowModal(false);
    setPostText("");
    setAuthorText("");
  };
  return (
    <>
      {props.showModal && (
        <Model setShowModal={props.setShowModal} showModal={props.showModal}>
          <NewPost
            postList={postText}
            setPostText={setPostText}
            postAuthor={postAuthor}
            setAuthorText={setAuthorText}
          />
          <button type="submit" onClick={() => handleinput("submit")}>
            Submit
          </button>
          <button type="submit" onClick={() => handleinput(false)}>
            Cancle
          </button>
        </Model>
      )}
      <ul className={classes.postList}>
        {postList.map((val) => {
          return (
            <Post
              key={val.text + val.author}
              name={val.author}
              message={val.text}
            />
          );
        })}
        {/* <Post name={postAuthor} message={postText} />
        <Post name={"aaa"} message={"hello aaaa"} /> */}
      </ul>
    </>
  );
};
export default PostsList;
