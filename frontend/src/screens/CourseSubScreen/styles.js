import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    display: 'flex',
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
};

export default styles;
