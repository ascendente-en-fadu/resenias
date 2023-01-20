import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  bottom: {
    backgroundColor: Colors.buttonBottom,
    borderRadius: 12,
    position: 'relative',
    width: '100%',
    flex: 1,
    margin: '25px 0',
    display: 'flex',
    flexDirection: 'column',
  },
  careerIndicatorContainer: {
    flex: 2,
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  carreerButtonBottom: {
    margin: '0px',
  },
  carreerButtonTop: {
    borderRadius: '24px',
  },
  selectorsContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  subject: {
    flex: 1,
    borderRadius: 24,
    backgroundColor: Colors.buttonTop,
    marginRight: '10px',
    color: Colors.lightGray,
    fontSize: 12,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: '10px',
    fontFamily: Fonts.light,
  },
  course: {
    flex: 1,
    borderRadius: 24,
    backgroundColor: Colors.buttonTop,
    color: Colors.lightGray,
    fontSize: 12,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: '10px',
    fontFamily: Fonts.light,
  },
  dropdownLeft: { marginRight: '12px' },
};

export default styles;
