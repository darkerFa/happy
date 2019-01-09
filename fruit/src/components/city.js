import React,{Component} from 'react'
import axios from 'axios';
import '../styles/city.scss'
import { Drawer, Button, Radio } from 'antd';
import store from '../store/store.js'
import {NavLink} from 'react-router-dom'
const RadioGroup = Radio.Group;



class City extends Component{
	constructor(props){
		super(props);
		this.state = {
		   looplist:[],
       abclist:[],
		   datalist:[],
           didian:'',
           visible: false,
           placement: 'bottom',
           AreaName:'',
           cbname:'',
          
 
		}
		
}	
   

  showDrawer = (id,name) => {
    console.log(id)
    axios({
      url:'https://b2capigateway.yiguo.com/api/user/Area/GetDistrictList',
          method:'post',
            headers:{
              'appName': 3000025,
              'Content-Type': 'application/json; charset=utf-8'
            },
            data:{"Head":{"Token":"","LoginToken":"","DeviceId":"b03b87703a3d4f53485abfde4fd38e52"},"Body":{"CityId":`${id}`}}

         }).then(res=>{
          console.log('详细城市222',res.data.Data.DistrictList)
          this.setState({
             datalist:res.data.Data.DistrictList,
              visible: true,
              didian:id,
             AreaName:name
          })
         })
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    })

}
    cb = (name)=>{
      console.log(name)
      this.setState({
        cbname:name
      })
     store.dispatch({
       type:"cd_name",
       payload:name
     })
    }

   componentDidMount(){
    console.log('加载渲染完成阶段')
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

	componentWillMount(){
         axios({
         	url:'https://b2capigateway.yiguo.com/api/user/Area/GetCityList',
         	method:'post',
            headers:{
            	'appName': 3000025,
            	'Content-Type': 'application/json; charset=utf-8'
            },
            data:{"Head":{"Token":"","LoginToken":"","DeviceId":"b03b87703a3d4f53485abfde4fd38e52"},"Body":{}}

         }).then(res=>{
         	// console.log('ABC地址',res.data.Data.HotCityList[0].CityList)
         	this.setState({
         		looplist:res.data.Data.HotCityList[0].CityList,
            abclist:res.data.Data.CityList
         	})
         	
         })
	}

	render(){
		return <div id="city">
		 <p>热门城市</p>
		 <ul className="one">
          {
          	this.state.looplist.map(item=>
                 <li key={item.AreaId}>

                 <RadioGroup
                 
          style={{ marginRight: 8 }}
          defaultValue={this.state.placement}
          onChange={this.onChange}
        >  
        </RadioGroup>
        <Button className="vip" type="primary" onClick={this.showDrawer.bind(this,item.AreaId,item.AreaName)}>
         {item.AreaName}
        </Button>
       
                 </li>
          		)
          }
		 </ul>
     <ul className="two">
          {
            this.state.abclist.map((item,index)=>
                 <li key={index} className="two_a">

           <p>{item.FirstLetter}</p>
            {
              item.CityList.map(data=>
                <div key={data.AreaId} >
        <RadioGroup      
          style={{ marginRight: 8 }}
          defaultValue={this.state.placement}
          onChange={this.onChange}
        >  
        </RadioGroup>
        <Button className="vip" type="primary" className="two_b" onClick={this.showDrawer.bind(this,data.AreaId,data.AreaName)}>
         {data.AreaName}
        </Button>
                </div>
                )
            }
        
                 </li>
              )
          }
     </ul>
		 <Drawer
          title={this.state.AreaName}
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          className={'cd'}
          height ={356}
        >
       {
        this.state.datalist.map(item=>
            <p key={item.AreaId} onClick={this.cb.bind(this,item.AreaName)}>
            <NavLink to='/home' replace>{item.AreaName}</NavLink></p>
          )
       }

        </Drawer>
		</div>
	}
}
export default City;

