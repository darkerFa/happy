import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import store from '../store/store.js'
import{getevaluate}  from './something/target.js'
import '../styles/evaluate.scss'
class Evaluate extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        store.dispatch({
            type:"hidetabbar",
            payload:false
           })
        console.log(this.props.match.params.ck)
        getevaluate(this.props.match.params.ck).then(res=>{
            console.log(res)
            this.setState({
                list:res
            })
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
        <div id="people">
            <div id="allpeo">
                    <h1>总体满意度<span>5分</span></h1>
                    <ul>
                        <li>只看内容</li>
                        <li>全部</li>
                        <li>好评</li>
                        <li>中评</li>
                        <li>差评</li>
                    </ul>
            </div>
            <ul className="peo">
                {
                    this.state.list.map((item,index)=>
                        <li>
                            <div>
                                <img src={item.UserPic}/>{item.UserName}
                                <span>{item.CreateTime}</span></div>
                            <p>{item.CommentContent}</p>
                        </li>
                    )
                }
            </ul>
        </div>
      )
    }
}

export default Evaluate 