import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    backgroundColor: Colors.buttonBottom,
    borderRadius: 12,
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  careerIndicatorContainer: {
    flex: 2,
    marginBottom: '10px',
    display: 'flex',
  },
  selectorsContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  carreerButtonBottom: {
    margin: '0px',
  },
  carreerButtonTop: {
    borderRadius: '24px',
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
  list: { zIndex: 3 },
};

export default styles;
