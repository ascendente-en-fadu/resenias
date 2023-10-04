import PropTypes from 'prop-types';

/**
 * Mock Icon component to show the icon name instead of the real SVG icon
 * @param {string} name name of the icon to display
 */
const Icon = ({ name }) => <div>{name}</div>;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
