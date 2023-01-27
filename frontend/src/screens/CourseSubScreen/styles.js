import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  ownReviewWriteContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  reviewListContainer: {
    flex: 1,
  },
  title: {
    color: Colors.lightGray,
    fontSize: 32,
    fontFamily: Fonts.light,
    marginBottom: '12px',
    marginTop: '6px',
  },
  selectionContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '12px',
    flex: 1,
  },
  ratesList: {
    zIndex: 1,
  },
  yearsList: {
    zIndex: 2,
  },
  question: {
    color: Colors.lightGray,
    fontSize: 16,
    fontFamily: Fonts.light,
    flex: 1,
  },
  dropdownBottom: {
    flex: 1,
    minHeight: '40px',
  },
};

export default styles;
