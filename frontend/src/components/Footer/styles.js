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
    margin: '5px 0',
    display: 'flex',
    flexDirection: 'row',
  },
};

export default styles;
