import React from 'react'
import ReactDOM from 'react-dom'

const styles = {
    fontFamily: 'sans-serif',
    color: 'purple',
    border: '1px solid green',
    borderRadius: '15px',
    padding: '5px',
    width: 'fit-content'

}

// const Header = () => {
//     return (
//         <header>
//             <h1 style = {styles}>
//                 Moja pierwsza strona w React
//             </h1>
//         </header>
//     )
// }


class HeaderCl extends React.Component {
    render() {
        return <h1 style={styles}>
            Moja pierwsza strona w React
        </h1>
    }
}
const Header = () => {
    return <header><HeaderCl/></header>
}

ReactDOM.render(
    <Header/>,
    document.querySelector('#root')
)