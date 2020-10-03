import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div className="result d-flex">{result}</div>
  );
}
Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
