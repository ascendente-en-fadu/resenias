import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  buttonBottom: {
    backgroundColor: Colors.buttonBottom,
    border: 'none',
    borderRadius: 12,
    position: 'relative',
    width: '100%',
    flex: 1,
    margin: '25px 0',
  },
  text: {
    fontSize: 30,
    color: Colors.lightGray,
    fontFamily: Fonts.semiBold,
  },
  buttonTop: {
    position: 'absolute',
    top: '-5px',
    left: '-5px',
    bottom: '5px',
    right: '5px',
    borderRadius: 12,
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
};

export default styles;
