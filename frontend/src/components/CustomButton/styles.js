import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  buttonBottom: {
    backgroundColor: Colors.buttonBottom,
    border: 'none',
    borderRadius: 18,
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 30,
    color: Colors.lightGray,
    fontFamily: Fonts.extraBold,
  },
  disabledText: {
    color: Colors.gray,
  },
  buttonTop: {
    position: 'absolute',
    top: '-5px',
    left: '-5px',
    bottom: '5px',
    right: '5px',
    borderRadius: 18,
    backgroundColor: Colors.buttonTop,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .05s',
  },
  buttonPressed: {
    top: '0px',
    left: '0px',
    bottom: '0px',
    right: '0px',
    backgroundColor: Colors.pressedButton,
  },
  arrow: {
    position: 'absolute',
    left: '10px',
    rotate: '90deg',
  },
};

export default styles;
