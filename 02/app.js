import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
    fontSize: '25px',
    textAlign: 'center',
    padding: '25px'
}

const HeaderFn = () => {

    return (
        <header style = { styles } >
            Moja pierwsza strona w React
        </header>
    )
}

class HeaderCl extends React.Component {
    render() {
        return <header style = { styles } >
            Moja pierwsza strona w React
        </header>
    }
}


ReactDOM.render(
    <HeaderCl/>,
    document.querySelector('#root')
)