import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  bottom: {
    marginTop: '12px',
    borderRadius: 16,
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: 'solid',
    borderColor: Colors.gray,
    borderWidth: '1px',
    overflowY: 'auto',
  },
  contentText: {
    fontSize: 16,
    color: Colors.gray,
    fontFamily: Fonts.light,
    paddingLeft: '24px',
  },
  dataText: {
    fontSize: 16,
    color: Colors.gray,
    fontFamily: Fonts.semiBold,
    paddingLeft: '24px',
  },
  reviewContainer: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '12px',
    boxSizing: 'border-box',
  },
  divider: {
    width: '80%',
    height: '1px',
    backgroundColor: Colors.gray,
    alignSelf: 'center',
    marginTop: '12px',
  },
};

export default styles;
