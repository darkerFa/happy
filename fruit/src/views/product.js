import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import store from '../store/store.js'
import{getpicword}  from './something/target.js'
import '../styles/product.scss'

class Product extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            fuck:''
        }
    }
    componentWillUnmount(){
        store.dispatch({
         type:"showtabbar",
         payload:true,
         isFuck:false
        })
      }
    componentDidMount(){
        console.log(this.props.match.params.dk)
        store.dispatch({
            type:"hidetabbar",
            payload:false
           })
        getpicword(this.props.match.params.dk).then(res=>{
            console.log(res)

            this.setState({
                list:res.CommodityAttributes,
                fuck:res.CommodityRemark,
                isFuck:true
            })
  
        })   
        // console.log(this.refs.goodluck)
       
        // this.refs.goodluck.innerhtml = this.state.fuck
    }  
    render() {
      return (
        <div id="product">
            <ul>
                {
                    this.state.list.map((item,index)=>
                    <li key={index}>{item.AttributeName}  {item.AttributeValue}</li>
                    )
                }
            </ul>
            <div>
                {
                    this.state.isFuck?
                    <div dangerouslySetInnerHTML={{__html:this.state.fuck}}></div>
                    :console.log('aaa')
                }
          </div>
        </div>
      )
    }


}

export default Product 