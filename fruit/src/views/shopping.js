import React, { Component } from 'react'
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom';
import axios from 'axios';

function genData() {
  const dataArr = [];
  for (let i = 0; i < 20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
      looplist:[],
    };
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      data: genData(),
    }), 0);
  }

  render() {
    return (<div>
      <Button
        style={{ marginBottom: 15 }}
        onClick={() => this.setState({ down: !this.state.down })}
      >
        direction: {this.state.down ? 'down' : 'up'}
      </Button>
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={this.state.down ? 'down' : 'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true });
          axios({
            url:'https://b2capigateway.yiguo.com/api/home/TemplateComponent/GetTemplateComponentInfo',
            method:'post',
            headers:{
              'appName': 3000025,
              'Content-Type': 'application/json; charset=utf-8'
            },
            data:{"head":{"version":"h5","cityCode":"8192","cityId":"dd7cbdb8-6463-436f-ba09-93c69150f137","districtId":"a872b70c-487c-4ebe-830b-bb0e1e341bc3","token":"","loginToken":""},"body":{"previewTime":"","operationType":0}}
          }).then(res=>{
          	this.setState({
          		looplist:res.data.Data.bulletComponentList[0].componentName
          	})
          })
          setTimeout(() => {
            this.setState({ refreshing: false,
              data:[...this.state.data,this.state.looplist]
            });
          }, 1000);
        }}
      >
        {this.state.data.map(i => (
          <div key={i} style={{ textAlign: 'center', padding: 20 }}>
           {i}
          </div>
        ))}
      </PullToRefresh>
    </div>);
  }
}



export default Demo;