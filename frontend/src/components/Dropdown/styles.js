import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    position: 'relative',
  },
  buttonTop: {
    transition: 'all .05s',
    fontSize: 16,
    fontFamily: Fonts.light,
    flexDirection: 'row-reverse',
    border: '1px solid',
    borderColor: Colors.transparent,
  },
  buttonContainer: {
    width: '100%',
  },
  requiredStyle: {
    borderColor: Colors.bannerText,
  },
  list: {
    position: 'absolute',
    left: '0px',
    right: '0px',
    top: '2.5em',
    backgroundColor: Colors.buttonBottom,
    display: 'flex',
    flexDirection: 'column',
    transform: 'scaleY(0)',
    transition: 'all .3s',
    transformOrigin: 'top',
    overflowY: 'auto',
    maxHeight: '400px',
    borderRadius: '16px',
    border: '1px solid #000000',
  },
  listOpen: {
    transform: 'scaleY(1)',
  },
  items: {
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.light,
    backgroundColor: Colors.transparent,
    border: 'none',
    margin: '.3em',
    textAlign: 'center',
    userSelect: 'none',
  },
};

export default styles;
