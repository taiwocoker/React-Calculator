import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div className="result d-flex text-white p-5 align-items-end bg-secondary">{result}</div>
  );
}
Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
