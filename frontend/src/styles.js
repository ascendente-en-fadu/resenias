import Colors from './constants/colors';

const styles = {
  page: {
    backgroundColor: Colors.screenBackground,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageMobileLandscape: {
    height: '250%',
  },
  containerMobile: {
    width: '90%',
    height: '95%',
  },
  containerDesktop: {
    width: '40%',
    height: '95%',
  },
  containerMobileLandscape: {
    width: '60%',
    height: '95%',
  },
};

export default styles;
