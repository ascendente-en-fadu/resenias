import Colors from '../../constants/colors';

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
  selectorsContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  careerButtonBottom: {
    flex: 2,
    marginBottom: '12px',
  },
  dropdownLeft: { marginRight: '12px' },
  list: { zIndex: 3 },
};

export default styles;
