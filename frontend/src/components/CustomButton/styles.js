import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
  },
  bottom: {
    position: 'absolute',
    backgroundColor: Colors.buttonBottom,
    borderRadius: 18,
    inset: '0px',
  },
  top: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.buttonTop,
    color: Colors.lightGray,
    fontSize: 30,
    fontFamily: Fonts.extraBold,
    padding: '.5em .5em',
    inset: '-5px 5px 5px -5px',
    borderRadius: 18,
    transition: 'all .05s',
    zIndex: '1',
    minWidth: '0px',
    userSelect: 'none',
  },
  topWithIconAndText: {
    justifyContent: 'space-between',
  },
  pressed: {
    backgroundColor: Colors.pressedButton,
    inset: '0px',
  },
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  disabledText: {
    color: Colors.gray,
  },
  rightMargin: {
    maxWidth: '2em',
    flex: 1,
    height: '100%',
  },
  icon: {
    width: '1.5em',
    minWidth: '1.5em',
  },
  iconWithText: {
    marginRight: '0.5em',
  },
};

export default styles;
