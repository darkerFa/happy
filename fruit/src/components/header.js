import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import '../styles/header.scss'
// import axios from 'axios';
import {NavLink} from 'react-router-dom'
import store from '../store/store.js'

class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			cdname:'城市'
		}
	}
	
    componentDidMount(){
    
	if (store.getState().cd!==null) {
		console.log(true)
		console.log(store.getState().cd)
		this.setState({
			cdname:store.getState().cd
		})
	}else{
		console.log(false)
		this.setState({
			cdName:this.state.cdname
		})
	   }
	}

    render() {
      return (
        <div id="header">
             <NavLink className='two' to='/city' replace><li className='one'>{this.state.cdname}∨</li></NavLink>
            <input type="text" placeholder="搜索"/>
        </div>
      )
    }
}

export default Header 