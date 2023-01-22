import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  buttonBottom: {
    backgroundColor: Colors.buttonBottom,
    borderRadius: 16,
    position: 'relative',
    flex: 3,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonNoBottom: {
    backgroundColor: Colors.transparent,
  },
  input: {
    backgroundColor: Colors.transparent,
    flex: 2,
    width: '100%',
    outline: 'none',
    border: 'none',
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.light,
    boxSizing: 'border-box',
    padding: '16px',
    resize: 'none',
  },
  button: {
    flex: 1,
    margin: '0px',
    backgroundColor: Colors.transparent,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.semiBold,
  },
};

export default styles;
