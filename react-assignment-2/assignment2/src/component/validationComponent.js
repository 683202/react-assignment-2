import React from 'react';
const validationComponent = (props) => {
    if(props.textLength === 0)
        return null;
    return props.textLength > 5 ? <p>Text long enough</p> : <p>Text too short</p>;
}

export default validationComponent;