import React from 'react';
import ReactDOM from 'react-dom';

class MenuItem extends React.Component {
    render() {
        const {url, text} = this.props;
        return <li> 
                    <a href = {url}>
                    {text}
                    </a>
                </li>
                
}   }

const Element = () => 
<MenuItem url="/contact" text="kontakt"/>;

export default MenuItem;
