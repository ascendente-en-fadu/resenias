import Colors from '../../constants/colors';
import { Fonts } from '../../fonts';

const styles = {
  bottom: {
    marginTop: '12px',
    borderRadius: 24,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: 'solid',
    borderColor: Colors.gray,
    borderWidth: '1px',
    overflowY: 'auto',
    padding: '16px 0',
  },
  contentText: {
    fontSize: 16,
    color: Colors.gray,
    fontFamily: Fonts.light,
  },
  dataText: {
    fontSize: 16,
    color: Colors.gray,
    fontFamily: Fonts.semiBold,
  },
  reviewContainer: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '24px',
    paddingRight: '24px',
    boxSizing: 'border-box',
  },
  divider: {
    width: '90%',
    height: '1px',
    backgroundColor: Colors.gray,
    alignSelf: 'center',
    margin: '16px 0',
  },
};

export default styles;
