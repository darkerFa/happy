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
                    </Switch>
                </div>
            </Router>
        </Provider>
      )
    }
}

export default  Routers