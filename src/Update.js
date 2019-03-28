import React, { Component } from 'react';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import axios from 'axios';
import './homestyle.css';

class Update extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
				    <div className="content">
  					<div className="card">
  					<h1>{this.props.title}</h1>
  					<article>{this.props.body}</article>
  					</div>	
			   </div>
			   </div>
        )
    }
}
export default Update;