import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    width: '100%',
  },
  bottom: {
    marginTop: '12px',
    borderRadius: 24,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: 'solid',
    borderColor: Colors.gray,
    borderWidth: '1px',
    padding: '16px 0',
    boxSizing: 'border-box',
  },
  bottomNoReviews: {
    flex: 1,
    padding: '16px 34px',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
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
    padding: '0px 24px',
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
    marginTop: '12px',
    textAlign: 'center',
  },
  noReviewsIcon: {
    width: '4em',
  },
};

export default styles;
