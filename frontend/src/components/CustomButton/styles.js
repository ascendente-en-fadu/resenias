import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  buttonBottom: {
    backgroundColor: Colors.buttonBottom,
    border: 'none',
    borderRadius: 18,
    padding: '0px',
    height: '70px',
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
    position: 'relative',
    height: '100%',
    inset: '-5px 5px 5px -5px',
    borderRadius: 18,
    backgroundColor: Colors.buttonTop,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .05s',
  },
  buttonPressed: {
    inset: '0px',
    backgroundColor: Colors.pressedButton,
  },
  arrow: {
    position: 'absolute',
    left: '10px',
    rotate: '90deg',
  },
  googleLogo: {
    marginRight: '14px',
  },
};

export default styles;
