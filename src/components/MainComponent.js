import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './FooterComponent';

class Main extends Component {
  render() {
    return (
      <div>
        <Header/>   
        <Switch>
            <Route path="/home" component={() => <Home/>} />
            <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
