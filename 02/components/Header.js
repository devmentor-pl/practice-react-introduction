import React from 'react';



// przy uzyciu funkcji
const Header = props => {
    return <header
    style={headerStyles}
    >
        { props.text }
    </header>
}

// // przy użyciu klasy
// class Header extends React.Component {
//     render() {
//         return <header
//         style={headerStyles}
//         >
//             { this.props.text }
//         </header>;
//     }
// }

const headerStyles = {
    display: 'flex',
    justifyContent: 'center',
    width: '70%',
    fontSize: '32px',
    margin: '0 auto',
    padding: '10px 20px',
    backgroundColor: 'rgb(30, 213, 241)',
    borderRadius: '8px',
    color: 'rgb(255, 255, 255)'
}

export default Header;