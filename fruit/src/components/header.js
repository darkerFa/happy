import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import '../styles/header.scss'
// import axios from 'axios';
import {NavLink} from 'react-router-dom'

class Header extends Component{
	

    render() {
      return (
        <div id="header">
             <li className='one'>城市∨<NavLink className='two' to='/city' replace>.</NavLink></li>
            <input type="text" placeholder="搜索"/>
        </div>
      )
    }
}

export default Header 