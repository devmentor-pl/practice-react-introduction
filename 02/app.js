import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HeaderFn from './components/HeaderF'
import HeaderCl from './components/HeaderC'

export default class App extends Component {
    render() {

        const headerStyle = {
            height: 'auto',
            backgroundColor: 'darkseagreen',
            textAlign: 'center',
            fontSize: '2em',
            align: 'center',
            color: '#333',
            fontFamily: 'Helvetica Neue',
            padding: '50px 0',
            margin: '0 30px'
        }
        
        return (
            <div>
                <HeaderFn style={ headerStyle } />
                {/* <HeaderCl style={ headerStyle } /> */}
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)