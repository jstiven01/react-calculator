import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { buttonName } = this.props;
    return (
      <button>
        {buttonName}
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
