import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  bottom: {
    backgroundColor: Colors.buttonBottom,
    borderRadius: 24,
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  requiredStyle: {
    border: '1px solid',
    borderColor: Colors.bannerText,
  },
  input: {
    backgroundColor: Colors.transparent,
    height: '72px',
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
    backgroundColor: Colors.transparent,
    height: '32px',
  },
  buttonText: {
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.semiBold,
  },
};

export default styles;
