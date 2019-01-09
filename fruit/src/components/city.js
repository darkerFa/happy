import React,{Component} from 'react'
import axios from 'axios';
import '../styles/city.scss'
import { Drawer, Button, Radio } from 'antd';
const RadioGroup = Radio.Group;



class City extends Component{
	constructor(props){
		super(props);
		this.state = {
		   looplist:[],
		   datalist:[],
           didian:'',
           visible: false,
           placement: 'bottom',
           AreaName:''
 
		}
		
}	
   

  showDrawer = () => {
    this.setState({
      visible: true,
    });
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
         		looplist:res.data.Data.HotCityList[0].CityList
         	})
         	
         })
	}

	componentDidUpdate(){
		axios({
			url:'https://b2capigateway.yiguo.com/api/user/Area/GetDistrictList',
         	method:'post',
            headers:{
            	'appName': 3000025,
            	'Content-Type': 'application/json; charset=utf-8'
            },
            data:{"Head":{"Token":"","LoginToken":"","DeviceId":"b03b87703a3d4f53485abfde4fd38e52"},"Body":{"CityId":`${this.state.didian}`}}

         }).then(res=>{
         	console.log('详细城市',res)
         	this.setState({
         		datalist:res.data.Data
         	})
         })

	}

	render(){
		return <div id="city">
		 <p>热门城市</p>
		 <ul className="one">
          {
          	this.state.looplist.map(item=>
                 <li key={item.AreaId} onClick={()=>
                     this.setState({
                     	didian:item.AreaId,
                     	AreaName:item.AreaName
                     })
                 }>

                 <RadioGroup
          style={{ marginRight: 8 }}
          defaultValue={this.state.placement}
          onChange={this.onChange}
        >  
        </RadioGroup>
        <Button className="vip" type="primary" onClick={this.showDrawer}>
         {item.AreaName}
        </Button>
        <Drawer
          title='选择城市'
          placement={this.state.placement}
          // closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
                 </li>
          		)
          }
		 </ul>
		
		</div>
	}
}
export default City;

