import React from 'react';

const MenuItem = (props) => {
    const { text, url } = props
    console.log(text, url)
    return (
        <ul>
            <li>
                <a
                    style={{ textDecoration: 'none', 
                    color: 'red' }}
                    href={url}
                >
                    {text}
                </a>
            </li>
        </ul>
    )
}

export default MenuItem