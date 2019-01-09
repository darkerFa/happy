import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'
import '../styles/detail.scss'
import {getnew} from './something/target.js'
class Detail extends Component{
    constructor (props){
        super(props)
        this.state={
            looplist:[],
            count:4,
        }
    }
    componentDidMount(){
        getnew(this.props.match.params.id,this.state.count).then(res=>{
            this.setState({
                looplist:res
            })
        })
    }

    render() {

      return (
        <div id="detail">
            <div>
                <ul>
                    <li>销量</li>
                    <li onClick={this.changplus.bind(this,5)}>新品</li>
                    <li>价格</li>
                </ul>
            </div>
            <ul>
                {
                    this.state.looplist.map((item,index)=>
                        <li key={item.CommodityId}>
                            <img src={item.SmallPic}/>{item.CommodityName}
                        </li>
                    )
                }
            </ul>
        </div>
      )
    }

     
    changplus(el){
        console.log(el)
        this.setState({
            count:el
        })
    }
}

export default Detail