import Colors from '../../constants/colors';

const styles = {
  container: {
    backgroundColor: Colors.buttonBottom,
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'column',
  },
  careerButtonContainer: {
    marginBottom: '12px',
  },
  selectorsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  dropdown: {
    flex: 1,
    maxWidth: 'calc(50% - 6px)',
  },
  list: { zIndex: 4 },
};

export default styles;
