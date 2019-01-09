import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
// import PropTypes from 'prop-types'
import {getLunbo} from '../sxm_cangku/lunbo_vip.js'

class Lunbo extends Component{
  constructor(props){
    super(props);
    this.state = {
      looplist:[]
    }

  }

  componentWillMount(){
     getLunbo().then(res=>{
      console.log(res.templateComponentList[0].carouselPictures)
      this.setState({
        looplist:res.templateComponentList[0].carouselPictures
      })
     })
  }

    render() {
 
      return (
        <div>

         <ReactSwipe
        key={this.state.looplist.length}
        className="carousel"
        swipeOptions={{ continuous: true }}
       
      >
       {
        this.state.looplist.map(item=>
          <img src={item.pictureUrl} key={item.adPictureId} alt=""/>
        )
       }
      </ReactSwipe>
        </div>
      )
    }
}

export default Lunbo