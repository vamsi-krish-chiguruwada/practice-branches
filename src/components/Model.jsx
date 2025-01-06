import classes from "./Model.module.css";
const Model = ({ children, setShowModal, showModal }) => {
  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => setShowModal(false)}
      ></div>
      <dialog open={showModal} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Model;
