import Colors from '../../constants/colors';

const styles = {
  bottom: {
    backgroundColor: Colors.buttonBottom,
    border: 'none',
    borderRadius: 12,
    position: 'relative',
    width: '100%',
    flex: 1,
    margin: '25px 0',
  },
  top: {
    position: 'absolute',
    top: '-5px',
    left: '-5px',
    bottom: '5px',
    right: '5px',
    display: 'flex',
    flexDirection: 'column',
  },
  careerIndicator: {
    flex: 2,
    borderRadius: 24,
    backgroundColor: Colors.buttonTop,
    marginBottom: '10px',
    color: Colors.lightGray,
    fontSize: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectorsContainer: { flex: 1, display: 'flex' },
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
  },
};

export default styles;
