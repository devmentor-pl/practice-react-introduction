import React from 'react';

const styleHeader = {
    color: 'yellow',
    backgroundColor: 'blue',
    textAlign: 'center'
}

const HeaderFn = props => {
    return (
        <header 
            style = {styleHeader}
        >{props.text}</header>
    )
}

export default HeaderFn;