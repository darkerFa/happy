import React,{Component} from 'react';
import '../sxm_css/main.scss'
import {getLunbo} from '../sxm_cangku/lunbo_vip.js'
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Main extends Component{
   constructor(props){
   	super(props);
   	this.state = {
      looplist:[],
      datalist:[],
      refreshing: false,
      down: 'up',
      height: document.documentElement.clientHeight,
      data:[],
      
   	}
   }

   componentWillMount(){
   	getLunbo().then(res=>{
   		console.log(res.templateComponentList)
   		this.setState({
   			data:res.templateComponentList.splice(1,3)
   		})
   		console.log(this.state.data)
   	})

   }
  
    componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
     
    }), 0);
  }

	render(){
		return <div id="main">
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto'
        }}
        direction={'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true });
          axios({
            url:'https://b2capigateway.yiguo.com/api/home/TemplateComponent/GetTemplateComponentInfo',
            method:'post',
            headers:{
              'appName': 3000025,
              'Content-Type': 'application/json; charset=utf-8'
            },
            data:{"head":{"version":"h5","cityCode":"8192","cityId":"dd7cbdb8-6463-436f-ba09-93c69150f137","districtId":"a872b70c-487c-4ebe-830b-bb0e1e341bc3","token":"","loginToken":""},"body":{"previewTime":"","operationType":1,"pageIndex":1,"homePageId":"55a2d0a1-98ab-43e9-90c8-825a54c6f06b","publishTime":"2019/01/11 11:25:11"}}
          }).then(res=>{
            console.log('拉动加载的数据',res)
            this.setState({
                datalist:res.data.Data.templateComponentList.splice(0,2)
            })
          })
          setTimeout(() => {
            this.setState({ refreshing: false,
           data:[...this.state.data,...this.state.datalist]
            });
          }, 1000);
        }}
      >
        {
          this.state.data.map(item=>
               <li key={item.adPictures[0].adPictureId}>
               <a href={item.adPictures[0].hrefValue}><img src={item.adPictures[0].pictureUrl} className="bigimg" alt=""/></a>
        <div className="aaa">
            <div className="bbb">
               {
                item.commoditysComponentList.map(da=>
                           <div className="vip" key={da.commodityId}>
                            <div className="vip_ch" onClick={this.where.bind(this,da.commodityName)}>
                             <img src={da.pictureUrl} className="swiper-slide" alt=""/>
                             <div className="first">{da.commodityName}</div>
                             <div className="second">{da.saleSlogan}</div>
                             <div className="third">{da.commodityPrice}<span>{da.commoditySpec}</span></div>
                             </div>
                           </div>
                  )
               }
               <a href={item.adPictures[0].hrefValue}><p className="check">点击查看更多></p></a>
            </div> 
           </div>

               </li>

              )
}
      </PullToRefresh>

        {/* <ul className="one">
           {
           	 this.state.looplist.map(item=>
               <li key={item.adPictures[0].adPictureId}>
               <a href={item.adPictures[0].hrefValue}><img src={item.adPictures[0].pictureUrl} className="bigimg" alt=""/></a>
	 			<div className="swiper-container">
		  			<div className="swiper-wrapper">
					     {
					     	item.commoditysComponentList.map(data=>
                           <div className="vip" key={data.commodityId}>
                            <div className="vip_ch" onClick={this.where.bind(this,data.commodityName)}>
	                           <img src={data.pictureUrl} className="swiper-slide" alt=""/>
	                           <div className="first">{data.commodityName}</div>
	                           <div className="second">{data.saleSlogan}</div>
	                           <div className="third">{data.commodityPrice}<span>{data.commoditySpec}</span></div>
                             </div>
                           </div>
					     		)
					     }
					     <p className="check">点击查看更多></p>
				    </div> 
			     </div>

               </li>

           	 	)

		  
           }  
           
		
         </ul>*/}
		</div>
	}
		where(s){
			console.log(s);
			console.log(this.props.bbb)
			this.props.bbb.history.push(`/detail/1${s}`);
		}
}

export default Main;