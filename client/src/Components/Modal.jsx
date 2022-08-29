const Modal = (props) => {
  const { message } = props;
  return (
    <div className="modal">
      <p>{message}</p>
    </div>
  );
};

export default Modal;
