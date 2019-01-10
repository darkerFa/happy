import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
// import PropTypes from 'prop-types'

import Header from '../components/header.js'
import Lunbo from './sxm_chajian/lunbo.js'
class Home extends Component{
    render() {

      return (
        <div>
           <p>占行显示,无需管理</p>
          <Header/>
          <Lunbo/>

        </div>
      )
    }
}

export default Home 