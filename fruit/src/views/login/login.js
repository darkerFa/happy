import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './login.scss';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authCodeImgUrl: null
		}
	}

	render() {
		return (
			<div className="login-page">
				<section className="menu">
					<form>
						<div className="username">
							<span className="icon-username"></span>
							<input type="text" placeholder="请输入您的用户名" />
						</div>
						<div className="password">
							<span className="icon-password"></span>
							<input type="text" placeholder="请输入您的密码" />
						</div>
						<div className="authcode">
							<input type="text" placeholder="请输入验证码" />
							<img src={this.state.authCodeImgUrl} alt="" className="authImg" />
						</div>
					</form>
				</section>
				<section className="affix">
					<div className="affix-up">
						<a href="javascript:;">忘记密码?</a>
					</div>
					<div className="affix-down">
						<input className="login" type="submit" value="登录" />
						<input className="register" type="submit" value="立即注册" />

					</div>
				</section>
				<section className="eg-logo">
					<span></span>
				</section>
			</div>
		);
	}


	componentDidMount() {
		axios({
			method: 'post',
			headers: {
				'appName': 3000025
			},
			url: 'https://b2capigateway.yiguo.com/api/user/User/GetVerificationCode',
			data: { "Head": { "Token": "", "LoginToken": "", "CityId": "312d0556-0671-4f2e-8bac-7b8873b5a03a", "CityCode": "1", "DistrictId": "825dbb3c-015a-4a19-a7be-a6bfe4aa0fe0", "DeviceId": "eaa46c63779eca9129259b426dbdd13f" }, "Body": {} }
		}).then(res => {
			console.log(res.data.Data.CodeImg);
			this.setState({
				authCodeImgUrl: res.data.Data.CodeImg
			})
		})
	}
}

export default Login;