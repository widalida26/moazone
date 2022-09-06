import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const Popup = (props) => {
  const { message, visible } = props;

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <div className="modal-container">
          <div className="modal-header">
            <Text style={styles.innerText}>알림</Text>
          </div>
          <span className="modal-text" align="center">
            {message.split('.').map((txt, i) => (
              <span key={i}>
                <Text>{txt}</Text>
                <br />
              </span>
            ))}
          </span>
          <Pressable onPress={props.onClickPopupButton}>
            <button className="modal-button" onClick={props.onClick}>
              <Text style={styles.innerText}>확인</Text>
            </button>
          </Pressable>
        </div>
        <Text> </Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  innerText: {
    color: 'white',
  },
});

export default Popup;
