
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu'


const Nav = () => {
 
  return (
        <nav>
          <Menu items={[
            { text: 'strona główna', url: '/' },
            { text: 'www', url: '/www' }
            ]} />
        </nav>
    
  )
  
 
}
export default Nav;