import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  censorshipAdviceContainer: {
    fontSize: 16,
    textAlign: 'center',
    margin: '0% 10%',
    color: Colors.gray,
    fontFamily: Fonts.light,
  },
  reviews: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    margin: '18px 0px',
    gap: '18px',
  },
};

export default styles;
