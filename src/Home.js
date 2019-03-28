import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import './homestyle.css';
import Toggle from './Toggle'
import Card from './Card'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isToggleOn: "My Post",

        };
    }

    componentDidMount() {


        axios.get("https://jsonplaceholder.typicode.com/posts")

            .then(response => {
                const posts = response.data;
                console.log(posts);
                this.setState({ posts });
            })

    }
    toggle = () => {
        this.state.isToggleOn == "My Post" ? this.setState({ isToggleOn: "All Post" }) : this.setState({ isToggleOn: "My Post" });

        if (this.state.isToggleOn == "My Post") {
            axios.get("https://jsonplaceholder.typicode.com/posts?userId=3")

                .then(response => {
                    const posts = response.data;
                    console.log(posts);
                    this.setState({ posts });
                })
        } else {
            axios.get("https://jsonplaceholder.typicode.com/posts")

                .then(response => {
                    const posts = response.data;
                    console.log(posts);
                    this.setState({ posts });
                })
        }
    }

    deletePost = (id) => {

        this.setState({ posts: this.state.posts.splice(id, 100) });
        console.log("Posts" + this.state.posts);
    }


    render() {

        return (
            <div>
				<div className="top-nav">				 
  					<Toggle toggle={this.toggle}/>

  				</div>
  				<div>
  					{this.state.posts.map(post=>
  				<div>
  					<Link to={'/Comment/'+post.id}>
  					<div key={post.id} >
                		<Card key={post.id} title={post.title} body={post.body}/>
                	</div>

                	</Link>
                	
					<div>
                		<button className="btn" onClick={()=>this.deletePost(post.id)}>Delete</button>
                		<Link to={"/Update"+post.id}>
                		<button>Update</button>
                		</Link>
                	</div>
                
                </div>
                	)		
				}

				</div>
			</div>

        );
    }
}

export default Home;