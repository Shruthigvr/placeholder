import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import './homestyle.css';

class Newpost extends Component {

    Addpost = () => {
        /*API to add new posts */
        axios.post("https://jsonplaceholder.typicode.com/posts/", {
                title: this.refs.title.value,
                body: this.refs.body.value,
                userId: 3
            })

            .then(response => {
                const newpost = response.data;
                console.log(newpost);
                this.setState({ newpost });
            })

    }

    render() {

        return (
            <div>
                    <div className="content">
                    <div className="card">                      
                    <input type="text" ref="title" placeholder="Add a Title" className="input-title"></input>
                    <br/>
                    <input type="text" ref="body" placeholder="Add your post" className="input-body"></input>
                     <br/>
                    {/*Function call to Addpost */}
                    <button onClick={this.Addpost}>New Post</button>
                    
                    </div>  
               </div>
               </div>
        )
    }
}
export default Newpost;