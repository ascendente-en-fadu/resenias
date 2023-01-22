import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title1: {
    color: Colors.lightGray,
    fontSize: 12,
    fontFamily: Fonts.timesNewRoman,
  },
  title2: {
    color: Colors.bannerText,
    fontSize: 60,
    fontFamily: Fonts.extraBold,
  },
  title3: {
    color: Colors.bannerText,
    fontSize: 30,
    fontFamily: Fonts.extraBold,
  },
};

export default styles;
