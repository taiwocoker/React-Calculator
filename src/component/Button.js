import React from 'react';
import PropTypes from 'prop-types';

function Button({name}) {
    return(
        <button type="button">
            {name}
        </button>
    )
}
Button.propTypes = {
    result: PropTypes.string.isRequired
}

export default Button;