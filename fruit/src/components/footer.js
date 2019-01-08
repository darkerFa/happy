import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
    NavLink
}from 'react-router-dom'
import '../styles/footer.scss'
class Footer extends Component{
    render() {
      return (
        <div id="footer">
            
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
        </div>
      )
    }
}

export default Footer 