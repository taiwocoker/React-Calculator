import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName, color, wide, clickHandler }) {
  
  const handleClick = (buttonName) => {
    // console.log(buttonName)
    return clickHandler(buttonName)
  }

  return (
    <button type="button" className={`${color ? 'gray' : 'orange'} button text-center text-black ${wide && 'button1'}`} onClick={() => handleClick(buttonName)}>
      {buttonName}
    </button>
  );
}

Button.defaultProps = {
  color: false,
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
