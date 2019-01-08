import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import '../styles/header.scss'

class Header extends Component{
    render() {
      return (
        <div id="header">
            <input type="text" placeholder="搜索"/>
        </div>
      )
    }
}

export default Header 