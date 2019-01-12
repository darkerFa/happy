import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {getdatalist} from './something/target.js'
import '../styles/shopping.scss'

class Shopping extends Component{
  constructor(props){
    super(props)
    this.state={
      shopId:'',
      isshop:false,
      list:[],
    }
    this.bbb=[]
  }
  componentDidMount(){
    
    var aaa = []
    this.setState({
      shopId:document.cookie.split(';').map(item=>{
        // console.log(item.split('=')[1])
        return item.split('=')[1]
      })
    },()=>{
        this.state.shopId.map(item=>{
          getdatalist(item).then(res=>{
            
            if(res){
              aaa.push(res.CommodityInfo)  
              // console.log(aaa)
              this.setState({
                list:aaa,
                isshop:true
              })
            }
          })
        })     
    })


   
    
  }
    render() {
      return (
        <div id='shopingcar'>
          <h2>全场满100元包邮,已包邮<span></span></h2>
          <ul>
            {
              this.state.isshop?
              this.state.list.map((item,index)=>
              // console.log(item.CommodityInfo.SmallPic)
              <li key={item.CommodityId}>
              <input type="checkbox" />
              <div className="today">
                <img src={item.SmallPic}/>
                <div>
                  <p>{item.CommodityName}</p>
                  <p>{item.OriginalPrice}</p>
                  <button>-</button><span>1111</span><button>+</button>
                </div>
              </div>
              </li>
                
              ):''
            }
          </ul>
          <div id="allShop">
              <div><input type="checkbox" /> 全选</div>
              <div>合计<span>1000</span>元</div>
              <div className="panta">去结算</div>
          </div>
          <div id="daxiao">
              <h2>还想要啥  咋不起飞呢  ！！ 盘他 </h2>
          </div>
        </div>
      )
    }
  }
export default Shopping 