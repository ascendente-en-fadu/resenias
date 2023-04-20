import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: '15px',
    justifyContent: 'space-between',
  },
  censorshipAdviceContainer: {
    fontSize: 16,
    textAlign: 'center',
    margin: '0% 10%',
    color: Colors.gray,
    fontFamily: Fonts.light,
  },
  ownReviewContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
};

export default styles;
