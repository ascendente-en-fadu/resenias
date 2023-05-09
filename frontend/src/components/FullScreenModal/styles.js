import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    backgroundColor: Colors.buttonBottom,
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    maxWidth: '500px',
  },
  buttonsContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.light,
    padding: '12px 24px',
    marginBottom: '8px',
    textAlign: 'center',
  },
  modal: {
    position: 'fixed',
    inset: '0px',
    backgroundColor: Colors.modalBackground,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '2',
  },
  leftButtonTop: {
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.semiBold,
    padding: '.4em 12px',
  },
  leftButtonContainer: {
    flex: 1,
  },
  rightButtonContainer: {
    marginLeft: '8px',
    flex: 1,
  },
  rightButtonTop: {
    backgroundColor: Colors.confirmationButton,
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.semiBold,
    padding: '.4em 12px',
  },
  rightButtonHighlight: {
    backgroundColor: Colors.confirmationButtonHighlight,
  },
};

export default styles;
