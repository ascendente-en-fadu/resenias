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
  dropdownRight: { minWidth: '48%' },
  dropdownLeft: { marginRight: '4%', minWidth: '48%' },
  list: { zIndex: 4 },
};

export default styles;
