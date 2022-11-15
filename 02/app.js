import React from 'react'
import ReactDOM from 'react-dom'

const CreateHeaderFN = () => {
    return (
        <header
            className={'header-fn'}
            style={{
                color: 'blue',
                fontSize: '300%',
                textAlign: 'center'
            }}
        > Moja pierwsza strona w React
        </ header>
    )
}


class CreateHeaderCl extends React.Component {
    render() {
        return (
            <header
                className={'header-cl'}
                style={{
                    color: 'red',
                    fontSize: '300%',
                    textAlign: 'center'
                }}>
                Moja pierwsza strona w React
            </header >
        )
    }
}


ReactDOM.render(
    <div>
        <CreateHeaderFN />
        <CreateHeaderCl />
    </div>,
    document.querySelector('#root')
)


