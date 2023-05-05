import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: '15px',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  buttonText: {
    color: Colors.lightGray,
    fontSize: 16,
    fontFamily: Fonts.light,
    padding: '18px 24px',
  },
  apologizeText: {
    color: Colors.gray,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Fonts.light,
    marginBottom: '28px',
    width: '250px',
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
