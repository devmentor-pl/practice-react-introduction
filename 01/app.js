import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
    return <header>{props.text}</header>
}

const helloReact = 'React działa!';

const App = () => <Header text = {helloReact} />;


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)