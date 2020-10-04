import React from 'react';
import PropTypes from 'prop-types';

function Display({ result, next}) {
  return (
    <div className="result">{next ? next : result ? result : 0}</div>
  );
}
Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
