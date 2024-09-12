import React from "react"
import ReactDOM from "react-dom"

const HeaderFn = () => {
    return (
        <header style={{ border: '1px solid gray', color: 'pink', borderRadius: '4px', width: '50%', textAlign: "center" }}>
            {'Moja pierwsza strona w React'}
        </header>
    )
}

const clHeaderStyles = {
    textAlign: "center",
    width: '50%',
    color: 'white',
    border: '1px solid gray',
    backgroundColor: 'black',
    borderRadius: '4px'
}

class HeaderCl extends React.Component {
    render() {
        return <header style={clHeaderStyles}>{'Moja pierwsza strona w React'}</header>
    }
}

ReactDOM.render(
    <>
        <HeaderFn />
        <HeaderCl />
    </>,
    document.querySelector('#root')
)