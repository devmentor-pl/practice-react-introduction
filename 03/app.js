import React from 'react'
import ReactDOM from 'react-dom'
import MenuItem from './MenuItem'

ReactDOM.render(
    <ul>
        <MenuItem
            text={'Kontakt'}
            url={'#'} />
    </ul>,
    document.querySelector('#root')
)
