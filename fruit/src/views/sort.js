import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {gettarget} from './something/target.js'
import '../styles/sort.scss'

class Sort extends Component{
  constructor(props){
    super(props)
    this.state={
      looplist:[],
      list:[],
      isShow:false,
      count:0,
      num:[],
    }
    this.list=[]
  }
  componentDidMount(){
    gettarget().then(res=>{
      // console.log(res)
      this.setState({
        looplist:res
      })
    })
  }
    render() {
      return (
          <div id="nav">
                <div className="search">
                        <input type="text"  onFocus={this.setDark.bind(this)} ref='dark' onBlur={this.getDark.bind(this)}/> 
                        <span onClick={this.getSearch.bind(this)}>搜索</span>
                </div>
                <div className="main">
                   {
                  this.state.isShow?
                  <div className="dark1"></div>
                  :''
                   }
                  <ul className="leftlist">
                    {
                      this.state.looplist.map((item,index)=>
                        <li key={item.CategoryId} onClick={this.handleclick.bind(this,item.Childs,index)}  ref={(el)=>this.list[index]=el}
                        className={this.state.count===index?'act':''}>
                            {item.CategoryName}
                        </li>
                      )
                    }
                  </ul>
                  <ul className="rightlist">
                              {
                                this.state.list.map((el)=>
                                  <li key={el.CategoryId} onClick={this.goto.bind(this,el.CategoryId)}>
                                  <img src={el.PictureUrl}/>
                                  {el.CategoryName}</li>
                                )       
                              }
                  </ul> 
                </div>
          </div>
      )
    }
    setDark(){
      
      this.setState({
        isShow:true
      })
    }
    getDark(){
      this.setState({
        isShow:false
      })
    }
    getSearch(){
      console.log(this.refs.dark.value)
      this.props.history.push(`detail/1${this.refs.dark.value}`)
      
    }
    handleclick(ev,index){
      // console.log(ev)
      this.setState({
        list:ev,
        count:index
      })
    }

    goto(id){
      // `CatId=${el.CategoryId}&CatName=${el.CategoryName}`
      console.log(id)
      this.props.history.push(`detail/0${id}`)
    }
}

export default Sort 