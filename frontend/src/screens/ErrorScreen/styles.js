import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  apologizeText: {
    color: Colors.gray,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Fonts.light,
    width: '250px',
    marginBottom: '24px',
  },
  errorIcon: {
    width: '100px',
  },
  errorText: {
    fontSize: 26,
    fontFamily: Fonts.extraBold,
    color: Colors.lightGray,
    marginBottom: '32px',
    marginTop: '8px',
  },
  link: {
    color: Colors.gray,
  },
};

export default styles;
