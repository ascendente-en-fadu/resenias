import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  bottom: {
    marginTop: '12px',
    borderRadius: 24,
    width: '100%',
    backgroundColor: Colors.buttonBottom,
    position: 'relative',
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
  reviewContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '16px',
  },
  deleteBottom: {
    position: 'absolute',
    backgroundColor: Colors.transparent,
    top: '-3px',
    right: '3px',
    width: '3em',
    height: '3em',
    margin: '0px',
  },
};

export default styles;
