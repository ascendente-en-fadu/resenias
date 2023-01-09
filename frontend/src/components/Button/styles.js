import Colors from '../../constants/colors';

const styles = {
  buttonDefault: {
    padding: 10,
    backgroundColor: Colors.button,
    border: 'none',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
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
