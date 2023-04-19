import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  bottom: {
    backgroundColor: Colors.buttonBottom,
    borderRadius: 24,
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
    outline: 'none',
    border: 'none',
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.light,
    boxSizing: 'border-box',
    margin: '12px',
    resize: 'none',
  },
  buttonBottom: {
    backgroundColor: Colors.transparent,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.semiBold,
  },
};

export default styles;
