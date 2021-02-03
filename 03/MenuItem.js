import React from 'react';
import ReactDOM from 'react-dom';

class MenuItem extends React.Component {
    render() {
        const {url, text} = this.props;
        return <ul url = {url}> {text}
                        <li>
                            <a>

                            </a>
                        </li>
                </ul>
}   }

const Element = () => 
<MenuItem text="kontakt" url="/contact"/>;

export default Element;
