import Colors from '../../constants/colors';

const styles = {
  buttonDefault: {
    backgroundColor: Colors.buttonTop,
    border: 'none',
    borderRadius: 12,
    position: 'relative',
    width: '100%',
    flex: 1,
    margin: '25px 0',
  },
  btnText: {
    fontSize: 30,
    color: Colors.lightGray,
    position: 'relative',
    zIndex: 10,
  },
  shadow: {
    position: 'absolute',
    top: '5px',
    left: '5px',
    bottom: '-5px',
    right: '-5px',
    borderRadius: 12,
    backgroundColor: Colors.buttonBottom,
    zIndex: -1,
  },
};

export default styles;
