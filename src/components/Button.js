import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName, color, wide }) {
  let classWide = '';
  if (wide) classWide = 'wide-twice';

  return (
    <button className={`color-button-${color} ${classWide}`} type="button">
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
