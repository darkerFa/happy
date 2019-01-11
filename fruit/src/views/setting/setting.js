import React, { Component } from 'react';
import './setting.scss';
import { Link } from 'react-router-dom';
import store from '../../store/store.js'
class Setting extends Component {
	componentDidMount(){
		store.dispatch({
            type:"hidetabbar",
            payload:false
           })
	}
	componentWillMount(){
		store.dispatch({
			type:"showtabbar",
			payload:true
		   })
	}
	render() {
		return (
			<div className="setting-page">
				<div className="service-tel">
					<span className="hot">客服热线</span>
					<span className="phone">400-000-7788</span>
					<i></i>
				</div>
				<ul className="list">
					<li>
						<Link to="/about">
							<span>关于我们</span>
							<i></i>
						</Link>
					</li>
					<li>
						<Link to="/aptitude">
							<span>营业资质</span>
							<i></i>
						</Link>
					</li>
					<li>
						<Link to="/service">
							<span>服务协议</span>
							<i></i>
						</Link>
					</li>
					<li>
						<Link to="/privacyclause">
							<span>隐私条款</span>
							<i></i>
						</Link>
					</li>
					<li>
						<Link to="/deliverynotes">
							<span>配送说明</span>
							<i></i>
						</Link>
					</li>
					<li>
						<Link to="/return">
							<span>退换货说明</span>
							<i></i>
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Setting;