import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Footer from './Footer';
import Nav from './Nav';
import Contact from '../pages/Contact';
import Table from '../pages/Table';

const Navigate = () => {
    return (
        <div>
            <Nav/>
            <Switch>
            <Route exact path="/">
              <Home/>
              </Route>
              <Route path="/services">
                  <Services/>
              </Route>
              <Route path="/contact">
                  <Contact/>
              </Route>
              <Route path="/data">
                  <Table/>
              </Route>
            </Switch>
            <Footer/>
            
        </div>
    )
}

export default Navigate
