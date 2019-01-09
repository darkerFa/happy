import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
import {
    NavLink
}from 'react-router-dom'
import '../styles/footer.scss'
import store from '../store/store.js'
class Footer extends Component{
    constructor(props){
    super(props);
    this.state = {
         isShow:true
    }
} 
     componentDidMount(){
        store.subscribe(()=>{
                console.log('store修改了',store.getState());

                this.setState({
                        isShow:store.getState().tabbar
                })
        })
    }
  

    render() {
      return (
        <div id="footer">
            {
                this.state.isShow?
            <ul>
                <li>     
                    <NavLink activeClassName="bgcolor" to='/home' replace>
                    <i className="iconfont icon-all"></i>首页
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="bgcolor" to='/sort' replace>
                    <i className="iconfont icon-category"></i>分类</NavLink>
                </li>
                <li>
                    
                    <NavLink activeClassName="bgcolor" to='/eat' replace>
                    <i className="iconfont icon-good"></i>吃饭吧</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="bgcolor" to='/shopping' replace>
                    <i className="iconfont icon-cart"></i>购物</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="bgcolor" to='/center' replace>
                    <i className="iconfont icon-account"></i>个人</NavLink>
                </li>
            </ul>
            :null
            }
        </div>
      )
    }
}

export default Footer 