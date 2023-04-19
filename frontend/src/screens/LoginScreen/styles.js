import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: '15px',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  buttonBottom: {
    width: '250px',
    height: '60px',
  },
  buttonText: {
    color: Colors.lightGray,
    fontSize: 16,
    fontFamily: Fonts.light,
  },
  apologizeText: {
    color: Colors.gray,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Fonts.light,
    marginBottom: '28px',
    width: '250px',
  },
};

export default styles;
