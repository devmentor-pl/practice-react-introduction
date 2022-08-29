import React from 'react';
import ReactDOM from 'react-dom';

const basicStyles = {
    fontSize: '32px',
    letterSpacing: '0.2rem',
    margin: '0 auto',
    padding: '20px 0',
    textAlign: 'center',
    textDecoration: 'underline',
    textTransform: 'uppercase',
    width: '80%',
}

const HeaderFn = () => (
    <header style = { basicStyles }>Moja pierwsza strona w React</header>
);

class HeaderCl extends React.Component {
    render() {
        return  <header style = { basicStyles }>Moja pierwsza strona w React</header>;
    };
};

ReactDOM.render(
    <HeaderFn/>,
    document.querySelector('#root')
);

