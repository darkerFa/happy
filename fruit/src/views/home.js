import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
// import PropTypes from 'prop-types'

import Header from '../components/header.js'
import Lunbo from './sxm_chajian/lunbo.js'
import Nav from './sxm_chajian/nav.js'

class Home extends Component{
  constructor(props){
    super(props);
  }
    render() {

      return (
        <div>
           <p>占行显示,无需管理</p>
          <Header/>
          <Lunbo/>
          <Nav aaa={this.props}/>
        </div>
      )
    }
}

export default Home 