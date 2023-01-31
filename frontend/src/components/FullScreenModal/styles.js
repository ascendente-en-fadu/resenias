import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  container: {
    backgroundColor: Colors.buttonBottom,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
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
    position: 'absolute',
    top: '0px',
    left: '0px',
    bottom: '0px',
    right: '0px',
    backgroundColor: Colors.modalBackground,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.semiBold,
  },
  buttonBottom: {
    height: '32px',
  },
  rightButtonBottom: {
    height: '32px',
    marginLeft: '8px',
  },
  rightButtonTop: {
    backgroundColor: Colors.confirmationButton,
  },
};

export default styles;
