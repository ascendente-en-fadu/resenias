import Colors from './constants/colors';

const styles = {
  page: {
    backgroundColor: Colors.screenBackground,
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    overflowY: 'auto',
  },
  containerMobile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  containerDesktop: {
    width: '700px',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default styles;
