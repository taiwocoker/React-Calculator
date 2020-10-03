import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName }) {
  return (
    <button type="button" className={`button text-center text-black ${buttonName === '0' && 'button1'}`}>
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
