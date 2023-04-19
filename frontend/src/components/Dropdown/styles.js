import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  buttonBottom: {
    backgroundColor: Colors.buttonBottom,
    borderRadius: 24,
    height: '40px',
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
    marginRight: '8px',
  },
  disabledText: {
    color: Colors.gray,
  },
  buttonTop: {
    position: 'relative',
    height: '100%',
    width: '100%',
    inset: '-5px 5px 5px -5px',
    borderRadius: 24,
    backgroundColor: Colors.buttonTop,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all .05s',
    padding: '0 16px',
    border: 'none',
  },
  requiredStyle: {
    border: '1px solid',
    borderColor: Colors.bannerText,
  },
  buttonPressed: {
    inset: '0px',
    backgroundColor: Colors.pressedButton,
  },
  list: {
    position: 'relative',
    left: '0px',
    right: '0px',
    top: '8px',
    backgroundColor: Colors.buttonBottom,
    display: 'flex',
    flexDirection: 'column',
    transform: 'scaleY(0)',
    transition: 'all .3s',
    transformOrigin: 'top',
    overflowY: 'auto',
    maxHeight: '400px',
    borderRadius: '16px',
    border: '1px solid #000000',
    zIndex: '1',
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
  },
};

export default styles;
