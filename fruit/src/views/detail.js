import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'
import '../styles/detail.scss'
class Detail extends Component{
    constructor (props){
        super(props)
        this.state={
            looplist:[]
        }
    }
    componentDidMount(){
        axios({
            url:'https://b2capigateway.yiguo.com/api/commodityapi/Commodity/GetSearchList',
            method:'post',
            headers:{
                'appName': 3000025,
            },
            data:{"Head":{"Token":"","LoginToken":"","CityId":`${this.props.match.params.id}`,"CityCode":"2","DistrictId":"751b5b8e-c1f7-4785-abeb-507b460f01ab","DeviceId":"34dc1400de48673cddd22a83a24c69e2","MobileOS":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"},"Body":{"Keyword":"","CategoryId":`${this.props.match.params.id}`,"CategoryCode":"","PageIndex":1,"Sort":4}}
        }).then(res=>{
            console.log(res.data.Data.CommodityList)
            this.setState({
                looplist:res.data.Data.CommodityList
            })
        })
    }
    render() {
       
      return (
        <div id="detail">
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
}

export default Detail