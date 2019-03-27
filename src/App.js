import React, { Component } from 'react';
import Home from './Home.js';
import Comment from './Comment.js';
import ReactDOM from 'react-dom';
import Add from './Add.js';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';


class App extends Component {
    render() {
        return (
            <Router>
              <div className="App">                
                 
                  <Route path = "/" exact component = {Home} />  
                  <Route path = "/Comment" exact component = {Comment} />        
                  
              </div>
            </Router>
        );
    }
}

export default App;