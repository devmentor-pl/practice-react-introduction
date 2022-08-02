import React from "react"
import ReactDOM from "react-dom"

const HeaderFn = () => {
    return (
        <header>
            {'Moja pierwsza strona w React'}
        </header>
    )
}

class HeaderCl extends React.Component {
    render() {
        return <header>{'Moja pierwsza strona w React'}</header>
    }
}

ReactDOM.render(
    <>
        <HeaderFn />
        <HeaderCl />
    </>,
    document.querySelector('#root')
)