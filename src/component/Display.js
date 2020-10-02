import React from 'react';

function Display(props) {
    return(
    <div>{props.result}</div>
    )
}
Display.defaultProps = {result: 0}
Display.propTypes = {
    result: React.PropTypes.string.isRequired
}

export default Display;