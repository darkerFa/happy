import React,{Component} from 'react';
import {getLunbo} from '../sxm_cangku/lunbo_vip.js';
import '../sxm_css/nav.scss'

class Nav extends Component{
	constructor(props){
		super(props);
		this.state = {
			firstimg:'',
			firsturl:'',
			secondimg:'',
			looplist:[]
		}
	}

	componentWillMount(){
         getLunbo().then(res=>{
         	console.log(res.templateComponentList)
         	this.setState({
         		firstimg:res.templateComponentList[0].adPictures[0].pictureUrl,
         		firsturl:res.templateComponentList[0].adPictures[0].hrefValue,
         		secondimg:res.templateComponentList[0].componentBase.navBackgroundImg,
         		looplist:res.templateComponentList[0].navComponentList
         	})
         })
	}

	render(){
		return <div id="nav">
          <a href={this.state.firsturl}><img src={this.state.firstimg} className="firstimg" alt=""/></a>
          <img src={this.state.secondimg} className="secondimg" alt=""/>
          <ul className="one">
             {
             	this.state.looplist.map(item=>
                   <li key={item.navId} className="one_li" onClick={this.nb.bind(this,item.navName)}><img src={item.pictureUrl} className="one_img" alt=""/>
                   <div>{item.navName}</div>
                   </li>
             		)
             }
          </ul>
		</div>

	}
		nb(id){
			 console.log(this.props.aaa)
			this.props.aaa.history.push(`/detail/1${id}`)
		}
}

export default Nav;