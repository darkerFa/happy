import React, { Component } from 'react'
import {
	HashRouter as Router,
	Switch,
	Route,
  Redirect
} from 'react-router-dom'
import Footer from '../components/footer.js'
import {Provider} from 'react-redux'
import Eat from '../views/eat'
import Home from '../views/home'
import Sort from '../views/sort'
import Center from '../views/center'
import Shopping from '../views/shopping'
import store from '../store/store'
import Detail from '../views/detail'
import City from '../components/city.js'
import Datalist from '../views/datalist.js'
import Product from '../views/product.js'
class Routers extends Component {
    render() {
      return (
        <Provider store={store}>
            <Router>
                <div>
                    <Footer/>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/sort' component={Sort}/>
                        <Route path='/eat' component={Eat}/>
                        <Route path='/shopping' component={Shopping}/>
                        <Route path='/center' component={Center}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route path='/datalist/:wfx' component={Datalist}/>
                        <Route path='/product/:dk' component={Product}/>
                        <Route path='/city' component={City}/>
                        <Redirect from="*" to='/home'/>
                    </Switch>
                </div>
            </Router>
        </Provider>
      )
    }
}

export default  Routers
