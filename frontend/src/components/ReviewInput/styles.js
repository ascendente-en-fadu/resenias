import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    gap: '18px',
  },
  title: {
    color: Colors.lightGray,
    fontSize: 32,
    fontFamily: Fonts.light,
    lineHeight: '0.8em',
  },
  selectionContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratesList: {
    zIndex: 2,
  },
  yearsList: {
    zIndex: 3,
  },
  question: {
    color: Colors.lightGray,
    fontSize: 16,
    fontFamily: Fonts.light,
    width: '45%',
  },
  dropdownContainer: {
    width: '45%',
  },
  requiredStyle: {
    border: '1px solid',
    borderColor: Colors.bannerText,
  },
  inputBottom: {
    backgroundColor: Colors.buttonBottom,
    borderRadius: 24,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
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
  buttonText: {
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.semiBold,
  },
};

export default styles;
