import React, { Component } from 'react'
import {Eaticon,Eatlist} from './sxm_cangku/eat_vip.js';
import './sxm_css/eat.scss'
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import PropTypes from 'prop-types'


class Eat extends Component{
  constructor(props){
  	super(props);
  	this.state = {
  		looplist:[],
  		datalist:[],
  		 refreshing: false,
       down: 'up',
       height: document.documentElement.clientHeight,
       data:[],
       vip:2,
       gg:'拉动刷新'
  	}
  }

   componentWillMount(){
   	Eatlist().then(res=>{
   		console.log('Eatlist求回数据',res.List)
   		this.setState({
   			looplist:res.List
   		})
   	})

   	Eaticon().then(res=>{
   		console.log('Eaticon求回数据',res.data.AdCategory37.Banners)
   		this.setState({
   			datalist:res.data.AdCategory37.Banners
   		})
   	})
   }

   componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
     
    }), 0);
  }

    render() {
      return (
        <div id="eat">
        <ul className="one">
          {
          	this.state.datalist.map(item=>
                <li key={item.BannerId} className="one_icon">
                <img src={item.PictureUrl} alt=""/>
                <p>{item.BannerName}</p>
                </li>
          		)
          }
          <p className="right-top">NEW</p>
          </ul>
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
            url:'/Category/GetListByGlobalType',
            method:'post',
            headers:{
              
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            data:`PageIndex=${this.state.vip++}&PageSize=5&Refresh=1547254596456`
          }).then(res=>{
            console.log('拉动加载的数据',res.data.RspData.ArticleList.List)
           if(res.data.RspData.ArticleList.List.length!==0){
            this.setState({
                data:res.data.RspData.ArticleList.List
            })
           }else{
           	   this.setState({
           	   	data:res.data.RspData.ArticleList.List,
                gg:'到底啦0.0'
            })
           }
          })
          setTimeout(() => {
            this.setState({ refreshing: false,
           looplist:[...this.state.looplist,...this.state.data]
            });
          }, 1000);
        }}
      >
          

          <ul className="two">
         {
         	this.state.looplist.map(item=>
              <li key={item.EfruitArticleId} className="bigli">
              <img src={item.PictureUrl} className="bigimg" alt=""/>
              <p className="bigp">{item.EfruitArticleTitle}</p>
              <p className="left_top">{item.OtherCategoryName}</p>
		                       <p className="num">观看人数:{item.TotalReadNum}</p>
		                 <ul className="smallul">
		                       <img src={item.AuthorPicture} className="smallimg" alt=""/>
		                       <p className="small_p1">{item.Author}</p>
		                       <p className="small_p2">{item.PublishedTimed}</p>
		                 </ul>
              </li>
         		)
         }
          </ul>
          <p className="downdown">{this.state.gg}</p>
            </PullToRefresh>
        </div>
      )
    }
}

export default Eat 