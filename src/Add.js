import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
class Add extends Component {
    

   
          btnclick = () => {
        axios.post("https://reqres.in/users", {
                email: this.refs.email.value,
                password: this.refs.pwd.value
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            })
    }


   render() {

        return (
            <div className="main">
            	<div id="new">
      				<p className="loginHead">NEW USER</p>
      				<input type="text" id="mail" ref="email" placeholder="Enter Email ID"/>
      				<br/>
      				<input type="password" id="pwd" ref="pwd" placeholder="Enter Password"/>
      				<br/>
      				<button onClick={this.btnclick}>Add</button>
        		</div>
				
			</div>
        );
    }
}
export default Add;