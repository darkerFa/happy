import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import gettarget from './something/target.js'
import '../styles/sort.scss'

class Sort extends Component{
  constructor(props){
    super(props)
    this.state={
      looplist:[],
      list:[],
      isShow:true,
      count:0
    }
    this.list=[]
  }
  componentDidMount(){
    gettarget().then(res=>{
      console.log(res)
      this.setState({
        looplist:res
      })
    })
  }
    render() {
      return (
          <div id="nav">
                <div className="search">
                        <input type="text" placeholder="搜索"/> <span>搜索</span>
                </div>
                <div className="main">
                  <ul className="leftlist">
                    {
                      this.state.looplist.map((item,index)=>
                        <li key={item.CategoryId} onClick={this.handleclick.bind(this,item.Childs,index)}  ref={(el)=>this.list[index]=el}
                        className={this.state.count===index?'active':''}>
                            {item.CategoryName}
                        </li>
                      )
                    }
                  </ul>
                  <ul className="rightlist">
                              { this.state.isShow?
                                this.state.list.map((el)=>
                                  <li key={el.CategoryId} onClick={this.goto.bind(this,el.CategoryId)}>
                                  <img src={el.PictureUrl}/>
                                  {el.CategoryName}</li>
                                ):null        
                              }
                  </ul> 
                </div>
          </div>
      )
    }
    handleclick(ev,index){
      console.log(ev)
      this.setState({
        list:ev,
        count:index
      })
    }

    goto(id){
      // `CatId=${el.CategoryId}&CatName=${el.CategoryName}`
      console.log(id)
      this.props.history.push(`detail/${id}`)
    }
}

export default Sort 