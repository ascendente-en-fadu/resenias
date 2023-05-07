import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    width: '100%',
  },
  bottom: {
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'column',
    border: 'solid',
    borderColor: Colors.gray,
    borderWidth: '1px',
    padding: '16px 24px',
    boxSizing: 'border-box',
  },
  bottomNoReviews: {
    flex: 1,
    padding: '16px 34px',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
  },
  contentText: {
    fontSize: 16,
    color: Colors.gray,
    fontFamily: Fonts.light,
    whiteSpace: 'pre-line',
  },
  dataText: {
    fontSize: 16,
    color: Colors.gray,
    fontFamily: Fonts.semiBold,
  },
  reviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },
  divider: {
    width: '90%',
    borderWidth: '1px 0px',
    borderColor: Colors.gray,
    alignSelf: 'center',
    margin: '16px 0',
  },
  noReviewsText: {
    fontSize: 16,
    color: Colors.gray,
    fontFamily: Fonts.light,
    textAlign: 'center',
  },
  noReviewsIcon: {
    width: '4em',
  },
};

export default styles;
