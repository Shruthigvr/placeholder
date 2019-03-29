import React, { Component } from 'react';
import Home from './Home.js';
import Comment from './Comment.js';
import Update from './Update.js';
import Newpost from './Newpost.js';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
    render() {
        return (
            <Router>
              <div className="App">           
                  <Route path = "/" exact component = {Home} />  
                  <Route path = "/Comment/:id" exact component = {Comment} />      
                  <Route path = "/Update/:id" exact component = {Update} /> 
                  <Route path = "/Newpost/" exact component = {Newpost} /> 
              </div>
            </Router>
        );
    }
}

export default App;