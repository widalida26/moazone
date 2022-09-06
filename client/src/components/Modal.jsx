import { Text, View } from 'react-native';

const Modal = (props) => {
  const { message } = props;

  return (
    // <div className="modal-wrapper">
    <div>
      <div className="modal-container">
        <div className="modal-header">알림</div>
        <p className="modal-text" align="center">
          {message.split('.').map((txt) => (
            <>
              {txt}
              <br />
            </>
          ))}
        </p>
        <button className="modal-button" onClick={props.onClick}>
          확인
        </button>
      </div>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      ></View>
    </div>
  );
};

export default Modal;
