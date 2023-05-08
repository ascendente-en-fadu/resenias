import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    color: Colors.lightGray,
    fontSize: 12,
    fontFamily: Fonts.light,
    marginLeft: '5px',
  },
  linkContainer: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
  },
  version: {
    color: Colors.gray,
    fontSize: 12,
    fontFamily: Fonts.light,
    flex: 1,
    textAlign: 'end',
  },
  logout: {
    color: Colors.lightGray,
  },
  icon: {
    width: '1.2em',
  },
};

export default styles;
