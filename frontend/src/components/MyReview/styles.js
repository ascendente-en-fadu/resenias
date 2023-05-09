import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    borderRadius: 24,
    width: '100%',
    backgroundColor: Colors.buttonBottom,
    position: 'relative',
  },
  reviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '16px',
    gap: '8px',
  },
  title: {
    fontSize: 24,
    color: Colors.lightGray,
    fontFamily: Fonts.extraBold,
  },
  contentText: {
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.light,
    whiteSpace: 'pre-line',
  },
  dataText: {
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.semiBold,
  },
  deleteButtonContainer: {
    position: 'absolute',
    top: '-3px',
    right: '3px',
  },
  deleteButtonTop: {
    fontSize: 18,
    padding: '10px',
  },
};

export default styles;
