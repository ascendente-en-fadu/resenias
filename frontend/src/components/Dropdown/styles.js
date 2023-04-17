import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  buttonBottom: {
    backgroundColor: Colors.buttonBottom,
    borderRadius: 24,
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  buttonNoBottom: {
    backgroundColor: Colors.transparent,
  },
  text: {
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.light,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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
    borderRadius: 24,
    backgroundColor: Colors.buttonTop,
    display: 'flex',
    alignItems: 'center',
    transition: 'all .05s',
    padding: '0 16px',
    border: 'none',
    justifyContent: 'space-between',
    width: '100%',
  },
  requiredStyle: {
    border: '1px solid',
    borderColor: Colors.bannerText,
  },
  buttonPressed: {
    top: '0px',
    left: '0px',
    bottom: '0px',
    right: '0px',
    backgroundColor: Colors.pressedButton,
  },
  list: {
    position: 'absolute',
    left: '0px',
    right: '0px',
    top: '110%',
    backgroundColor: Colors.buttonBottom,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    flexDirection: 'column',
    transform: 'scaleY(0)',
    transition: 'all .3s',
    overflowY: 'auto',
    transformOrigin: 'top',
    maxHeight: '1000%',
    borderRadius: '16px',
    border: '1px solid #000000',
  },
  listOpen: {
    transform: 'scaleY(1)',
  },
  items: {
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.light,
    backgroundColor: Colors.transparent,
    border: 'none',
    margin: '4px 0',
    width: '100%',
  },
};

export default styles;
