import React from 'react';
import ReactDOM, { render } from 'react-dom';

const HeaderFn = () => {
    return <h1
        className="HeaderFn"
        style={{ border :'1px red solid'}}
    >TytułFn</h1>
}

class HeaderCl extends React.Component {
    render() {
        return <h1 className="HeaderCl" style={{ border :'1px hotpink solid'}}>TytułCl</h1>
    }
}

const App = () => {
    return <div><HeaderFn /><HeaderCl /></div>
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);