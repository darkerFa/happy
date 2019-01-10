import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'
import { PullToRefresh } from 'antd-mobile';
import '../styles/detail.scss'
import {getnew} from './something/target.js'
import ReactDOM from "react-dom";
import store from '../store/store.js'
class Detail extends Component{
    constructor (props){
        super(props)
        this.state={
            looplist:[],
            count:4,
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data:[],
            num:1,
            isloading:true
        }
    }
    componentDidMount(){
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        getnew(this.props.match.params.id,this.state.count,this.state.num).then(res=>{
            this.setState({
                    height: hei,
                   looplist:res
               })
               console.log(this.state.looplist)
           }) 
        //    console.log('加载渲染完成阶段')
           store.dispatch({
            type:"hidetabbar",
            payload:false
           })
    }
      componentWillUnmount(){
        store.dispatch({
         type:"showtabbar",
         payload:true
        })
           
      }
    render() {
        
      return (
        <div id="detail">
            <div id="loop">
                <ul>
                    <li onClick={this.changcount.bind(this,4)}>销量</li>
                    <li onClick={this.changplus.bind(this,5)}>新品</li>
                    <li onClick={this.changprice.bind(this,1)}>价格</li>
                </ul>
            </div>
            {/* <ul id="fic">
                {
                    this.state.looplist.map((item,index)=>
                        <li key={item.CommodityId} >
                            <img src={item.SmallPic}/>
                            <div>{item.CommodityName}<br/>
                                    {item.SubTitle}<br/>
                                    {item.PromotionTag}<br/>
                                    ￥{item.SellPrice}  {item.Spec}    <button>+</button>
                                    </div>
                        </li>
                    )
                }
            </ul> */}
                                      
            <div id="box">
                                <PullToRefresh
                                    damping={60}
                                    ref={el => this.ptr = el}
                                    style={{
                                    height: this.state.height-100,
                                    overflow: 'auto',
                                    }}
                                    indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                                    direction={this.state.up ? 'down' : 'up'}
                                    refreshing={this.state.refreshing}
                                    onRefresh={() => {
                                      
                                    this.setState({ refreshing: true });

                                    //axios...
                                    // setTimeout(() => {
                                    //     this.setState({ refreshing: false,
                                    //         data:["kerwin","xiaoming",...this.state.data]
                                    //     });
                                    // }, 1000);
                                    // if(this.state.looplist.length){
                                    //     return 
                                    // }
                                        
                                    if(this.state.isloading){
                                        getnew(this.props.match.params.id,this.state.count,this.state.num+1).then(res=>{
                                            this.setState({
                                                   looplist:[...this.state.looplist,...res],
                                                   num:this.state.num+1
                                               })
                                               if(res.length===0){
                                                   this.setState({
                                                       isloading:false
                                                   })
                                               }
                                        })
                                    }
                                    }}
                                >
                        <ul id="fic">
                                {
                                    this.state.looplist.map((item,index)=>
                                        <li key={item.CommodityId} >
                                            <img src={item.SmallPic}/>
                                            <div>{item.CommodityName}<br/>
                                                    {item.SubTitle}<br/>
                                                    {item.PromotionTag}<br/>
                                                    ￥{item.SellPrice}  {item.Spec}    <button>+</button>
                                                    </div>
                                        </li>
                                    )
                                }
                         </ul>
                            </PullToRefresh>
             </div>
        </div>
      )
    }

     
    changplus(el){
        getnew(this.props.match.params.id,this.state.count,this.state.num).then(res=>{
            this.setState({
                   looplist:res,
                    count:el
               })
           })
           
    }
    changcount(el){
        getnew(this.props.match.params.id,el,this.state.num).then(res=>{
            this.setState({
                   looplist:res,
                   count:el
               })
           })
    }
    changprice(el){
        getnew(this.props.match.params.id,el,this.state.num).then(res=>{
            this.setState({
                   looplist:res,
                   count:el
               })
         })
    }
}

export default Detail