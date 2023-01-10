import Colors from '../../constants/colors';

const styles = {
  buttonDefault: {
    backgroundColor: Colors.button,
    border: 'none',
    borderRadius: 8,
    position: 'relative',
    width: 80,
    height: 50,
    margin: 20,
  },
  btnText: {
    fontSize: 20,
    color: Colors.normalText,
    position: 'relative',
    zIndex: 10,
  },
  shadow: {
    position: 'absolute',
    top: '5px',
    left: '5px',
    bottom: '-5px',
    right: '-5px',
    borderRadius: 8,
    backgroundColor: Colors.button,
  },
};

export default styles;
