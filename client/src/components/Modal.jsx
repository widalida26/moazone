const Modal = (props) => {
  const { message } = props;
  return (
    // <div className="modal-wrapper">
    <div className="modal">
      <div className="modal-title">
        알림
        {/* <p>알림</p> */}
      </div>
      <p>{message}</p>
      <button className="modal-button" onClick={props.onClick}>
        확인
      </button>
    </div>
  );
};

export default Modal;
