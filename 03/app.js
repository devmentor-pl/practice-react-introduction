import React from 'react'
import ReactDOM from 'react-dom'
import MenuItem from './MenuItem'

ReactDOM.render(
    <ul>
        <MenuItem
            text={'Kontakt'}
            url={'contact'} />
    </ul>,
    document.querySelector('#root')
)
