import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './center.scss';
// import { NavLink } from 'react-router-dom';
import store from '../store/store.js'
class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isJump: true,
      accountList: [],
      payList: [],
      functionList: []
    }
  }
  componentWillMount(){
    store.dispatch({
      type:"showtabbar",
      payload:true
     })
  }
  render() {
    return (
      <div className="center">
        <div className="header">
          <div className="header_user">
            <div className="setting">
              <Link to="/setting">
                <span></span>
              </Link>
              
            </div>
            <div className="header_img">
              <img src="//img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg" alt="" />
            </div>
            <div className="login">
              <Link to="/login">登录/注册</Link>
            </div>
            <ul className="account">
              {
                this.state.accountList.map(item =>
                  <li key={item.LinkType}>
                    <Link to="/login">
                      <span className="num">{item.Number}</span>
                      <span className="list">{item.Text}</span>
                    </Link>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
        <div className="paylist">
          <ul>
            {
              this.state.payList.map(item =>
                <li key={item.LinkType}>
                  <Link to="/login">
                    <img src={item.IconUrl} alt="" />
                    <span>{item.IconText}</span>
                  </Link>
                  
                </li>
              )
            }
            <li>
              <Link to="/login">
                <span className="line"></span>
                <img src="//img07.yiguoimg.com/d/web/180315/01315/162344/allorder.png" alt="" />
                <span>全部订单</span>
                <span className="arrows"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="functionlist">
          <ul>
            {
              this.state.functionList.map(item =>
                <li key={item.LinkType}>
                  <Link to="/login">
                    <img src={item.IconUrl} alt="" />
                    <span>{item.IconName}</span>
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }

  jumpPage() {
    if (this.state.isJump) {
      window.location.href = "https://www.baidu.com/";
    } else {
      window.location.href = "https://www.qq.com/";
    }
  }

  componentDidMount() {
    axios({
      method: 'post',
      headers: {
        'appName': 3000025
      },
      url: 'https://b2capigateway.yiguo.com/api/user/User/GetUserInfo',
      data: { "Head": { "Token": "", "LoginToken": "", "CityId": "312d0556-0671-4f2e-8bac-7b8873b5a03a", "CityCode": "1", "DistrictId": "825dbb3c-015a-4a19-a7be-a6bfe4aa0fe0", "DeviceId": "eaa46c63779eca9129259b426dbdd13f", "MobileOS": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1" }, "Body": "" }
    }).then(res => {
      console.log(res.data.Data.UserInfo.IconList);
      this.setState({
        accountList: res.data.Data.UserInfo.BalanceAndCoupons,
        payList: res.data.Data.UserInfo.OrderIcons,
        functionList: res.data.Data.UserInfo.IconList
      })

    })
  }
}

export default Center 