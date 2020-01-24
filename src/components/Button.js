import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  handleClick = () => {
    const { clickHandler, buttonName } = this.props;
    return clickHandler(buttonName);
  }

  render() {
    const { color, buttonName, wide } = this.props;
    let classWide = '';
    if (wide) classWide = 'wide-twice';

    return (
      <button
        className={`color-button-${color} ${classWide}`}
        type="button"
        onClick={this.handleClick}
      >
        {buttonName}
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
