import Colors from './constants/colors';

const styles = {
  page: {
    backgroundColor: Colors.screenBackground,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflowY: 'auto',
  },
  containerMobile: {
    width: '90%',
    height: '95%',
  },
  containerDesktop: {
    width: '650px',
    height: '95%',
  },
};

export default styles;
