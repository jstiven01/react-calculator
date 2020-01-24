import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div id="display">
      <span>{result}</span>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: '0',
};


export default Display;
