import React from 'react';
import ReactDOM from 'react-dom';

class MenuItem extends React.Component {
    render() {
        const {url, text} = this.props;
        return (
            <li>
                <a href={ url }>{ text }</a>
            </li>
        )        
    }
}

const App = () => <MenuItem text="kontakt" url="/contact/"/>

ReactDOM.render(
    <ul>
        <App/>
    </ul>,
    document.querySelector('#root')
);