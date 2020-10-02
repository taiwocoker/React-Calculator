import React from 'react';
import PropTypes from 'prop-types';

function Button(prop) {
    return(
    <div>{prop.button}</div>
    )
}
Button.propTypes = {
    result: PropTypes.string.isRequired
}

export default Button;