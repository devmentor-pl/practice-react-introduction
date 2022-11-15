import React from 'react'
import ReactDOM from 'react-dom'
import MenuItem from '../03/MenuItem'

const Menu = props => {
    return (
        <ul>
            <MenuItem
                text={'Home'}
                url={'/'}
            />
            <MenuItem
                text={'Kontakt'}
                url={'/contact'} />
        </ul>
    )
}


ReactDOM.render(
    <nav>
        <Menu />
    </nav>,
    document.querySelector('#root')
)
