import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonText: {
    color: Colors.lightGray,
    fontSize: 16,
    fontFamily: Fonts.light,
    padding: '16px',
  },
  apologizeText: {
    color: Colors.gray,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Fonts.light,
    width: '250px',
    marginBottom: '24px',
  },
};

export default styles;
