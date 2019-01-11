import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import '../styles/home.scss'
// import PropTypes from 'prop-types'

import Header from '../components/header.js'
import Lunbo from './sxm_chajian/lunbo.js'
import Nav from './sxm_chajian/nav.js'
import Main from './sxm_chajian/main.js'

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      isShow:false
    }
  }
    render() {

      return (
        <div id="home">
           <p>占行显示,无需管理</p>
          
           {
            this.state.isShow?
              <div className="black"></div>
             :null 
            
           }
          <Header event={this.cb.bind(this)}/>
          <Lunbo/>
          <Nav aaa={this.props}/>
          <Main bbb={this.props}/>
        </div>
      )
    }
    cb(s){
      this.setState({
        isShow:s
      })
    }
}

export default Home 