import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import './homestyle.css';
import Toggle from './Toggle'
import Card from './Card'

/* Home Page */
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isToggleOn: "My Post",

        };
    }

    componentDidMount() {
        /*API to list posts */
        axios.get("https://jsonplaceholder.typicode.com/posts")

            .then(response => {
                const posts = response.data;
                console.log(posts);
                this.setState({ posts });
            })

    }
    /* Function for toggle button */
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
    /* Function  to delete posts */
    deletePost = (id) => {
        var item = this.state.posts;
        var newitem = item.filter(item => item !== id)
        this.setState({ posts: newitem });

    }

    render() {

        return (
            <div>
            	{/*Add new posts */}
				<div className="top-nav">				 
  					<Toggle toggle={this.toggle}/>
  					<Link to={"/Newpost/"}>
                		<button>Add Post</button>
                	</Link>

  				</div>
  				<div>
  					{/*Looping posts */}
  					{this.state.posts.map(post=>
  						<div>
  							<Link to={'/Comment/'+post.id}>
  								<div key={post.id} >
                					<Card key={post.id} title={post.title} body={post.body}/>
                				</div>
                			</Link>
                	
						<div>
                			<button className="btn" onClick={()=>this.deletePost(post.id)}>Delete</button>
                			<Link to={"/Update/"+post.id}>
                				<button>Update</button>
                			</Link>
                		</div>
                
                </div>
             		)}		
							

				</div>
			</div>

        );
    }
}

export default Home;