import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName }) {
  return (
    <button type="button">
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
