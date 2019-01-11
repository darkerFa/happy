import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import store from '../store/store.js'
import{getdatalist}  from './something/target.js'
import { Carousel, WingBlank } from 'antd-mobile';
import '../styles/datalist.scss'
import {
    NavLink
}from 'react-router-dom'
class Datalist extends Component{
    constructor(props){
        super(props)
        this.state={
            pics:[],
            allList:'',
            num:1,
            shopNum:0
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.wfx)
        getdatalist(this.props.match.params.wfx).then(res=>{
            this.setState({
                pics:res.CommodityInfo.Pictures,
                allList:res.CommodityInfo
            })
            console.log(res.CommodityInfo)
        })

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
       <div id="showshop">
            <div id='pics'>
                <WingBlank>
                    <Carousel
                    autoplay={true}
                    infinite
                    >
                    {
                        this.state.pics.map((val,num)=> (
                        <img
                            src={val}
                            key={num}
                            // style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            }}
                        />
                        ))
                    }
                    </Carousel>
                </WingBlank>
            </div>

            <div className="productInfor">
                    <h3>{this.state.allList.CommodityName}</h3>
                    <div className="subhead"><span className="label">{this.state.allList.PromotionTag}</span> {this.state.allList.SubTitle}</div>
                    <div><span className="priceRed">{this.state.allList.OriginalPrice}￥</span><span>产地：{this.state.allList.PlaceOfOrigin}</span></div>
                    <p>{this.state.allList.CanNoReasonToReturnText}</p>
            </div>

            <div className="norms">
                    <div className="what">规格<span></span><span></span></div>
                    <div className="count">
                    <p>数量</p>
                    <span onClick={this.minNum.bind(this)}>-</span>
                    <span >{this.state.num} </span>
                    <span onClick={this.plusNum.bind(this)}>+</span>
                    </div>
            </div>

            <div className="address">
                <p>送至{this.state.allList.ShippingAddress}<br/>
                {this.state.allList.DeliveryTips}
                </p>
            </div>
            <div className="evaluate">
                <span onClick={this.chickto.bind(this,this.state.allList.CommodityId)}>评价       查看全部》</span><br/>
                <h3>hello world</h3>
                <h2 onClick={this.gotoProduct.bind(this,this.state.allList.CommodityId)}>查看图文详情</h2>
            </div>
            <div className="line-top">
                    <ul>
                        <li>
                        <NavLink activeClassName="bgcolor" to='/home' replace>
                             <i className="iconfont icon-all"></i><br/>首页
                         </NavLink>
                        </li>
                        <li className="showNum">
                        <NavLink activeClassName="bgcolor" to='/shopping' replace>
                        <i className="iconfont icon-cart"><br/></i>购物</NavLink>
                        <div>{this.state.shopNum}</div>
                        </li>
                    </ul>
                    <div onClick={this.joinShop.bind(this)}>加入购物车</div>
                    
            </div>
        </div>
      )
    }

    gotoProduct(id){
        this.props.history.push(`/product/${id}`)
    }
    chickto(el){
        console.log('ssss')
        this.props.history.push(`/evaluate/${el}`)
    }
    minNum(){
        if(this.state.num === 1){
            return this.state.num 
        }else{
            this.setState({
                num:this.state.num-1
            })
        }
    }
    plusNum(){
        this.setState({
            num:this.state.num+1
        })
    }
    joinShop(){
        this.setState({
            shopNum:this.state.num+this.state.shopNum
        })
    }
}

export default Datalist 
