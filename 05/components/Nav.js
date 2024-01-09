import React from "react";
import Menu from "./Menu";
import PropTypes from 'prop-types';


class Nav extends React.Component {
    render(){
        const arr = [
            {text: 'strona główna', url: '/'}, 
            {text: 'www', url: '/www'}
        ];
        return <nav className={this.props.class}>
            <Menu class="nav__list" elements={arr}></Menu>
        </nav>
    }
}

Nav.propTypes = {
    class: PropTypes.string.isRequired,
}

export default Nav
