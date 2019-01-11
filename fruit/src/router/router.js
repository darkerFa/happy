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


import Login from '../views/login/login';
import Setting from '../views/setting/setting';
import About from '../views/setting-details/about-us/about-us';
import Aptitude from '../views/setting-details/aptitude/aptitude';
import Privacyclause from '../views/setting-details/privacyclause/privacyclause';
import Return from '../views/setting-details/return/return';
import Service from '../views/setting-details/service/service';
import Deliverynotes from '../views/setting-details/deliverynotes/deliverynotes';

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

                        <Route path='/center' component={Center} />
                        <Route path='/login' component={Login} />
                        <Route path='/setting' component={Setting} />
                        <Route path='/about' component={About} />
                        <Route path='/aptitude' component={Aptitude} />
                        <Route path='/privacyclause' component={Privacyclause} />
                        <Route path='/return' component={Return} />
                        <Route path='/service' component={Service} />
                        <Route path='/deliverynotes' component={Deliverynotes} />


                        <Redirect from="*" to='/home'/>
                    </Switch>
                </div>
            </Router>
        </Provider>
      )
    }
}

export default  Routers
