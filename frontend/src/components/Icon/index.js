import PropTypes from 'prop-types';

import {
  ArrowIcon,
  CafecitoIcon,
  DeleteIcon,
  GoogleIcon,
  InstagramIcon,
  NoReviewsIcon,
} from '../../images';
import styles from './styles';

/**
 * Icon component to style and display vector icons
 * @param {string} name name of the icon to display
 * @param {object} customStyles custom styles for the chosen icon
 */
const Icon = ({ name, customStyles }) => {
  /**
   * Function to get an Icon components object, styled with an styles object
   */
  const icons = (customStyles) => {
    return {
      arrowLeft: (
        <ArrowIcon
          style={{
            ...styles.arrowLeft,
            ...customStyles,
          }}
        />
      ),
      arrowDown: <ArrowIcon style={customStyles} />,
      cafecito: <CafecitoIcon style={customStyles} />,
      delete: <DeleteIcon style={customStyles} />,
      google: <GoogleIcon style={customStyles} />,
      instagram: <InstagramIcon style={customStyles} />,
      noReviews: <NoReviewsIcon style={customStyles} />,
    };
  };

  return icons(customStyles)[name];
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  customStyles: PropTypes.object,
};

export default Icon;
