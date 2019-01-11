import React, { Component } from 'react';
import './deliverynotes.scss';

class Deliverynotes extends Component {
	render() {
		return (
			<div className="deliverynotes">
				<div className="item">
					<div className="info">
						<h2>配送范围：</h2>
						<ul>
							<li>上海、北京、昆山、苏州、杭州、无锡、宁波、天津、石家庄、廊坊，自有物流直配</li>
							<li>全国59 个城市冷链配送</li>
						</ul>
						<h2>配送运费：</h2>
						<ul>
							<li>自配城市购物满100元，免费送货【上海地区崇明岛除外，北京地区六环外除外】；不满100元，每单收取10元运费。</li>
							<li>其他地区运费按照第三方物流的收费标准执行，选好商品及收货地址后会自动计算。</li>
							<li>如购买鲜活商品满500元，免费送货；500元以下，每单收取50元运费。</li>
							<li>定时服务费。</li>
						</ul>
					</div>
				</div>

			</div>
		);
	}
}

export default Deliverynotes;