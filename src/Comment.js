import React, { Component } from 'react';
import axios from 'axios';
import './homestyle.css'
import './App.css'


class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {

        axios.get("https://jsonplaceholder.typicode.com/comments?postId="+this.props.match.params.id)

            .then(response => {
                const comments = response.data;
                console.log(comments);
                this.setState({ comments });
    })
  }

render() {

    return (
        <div className="content">
            <div> 
              <h1>COMMENTS</h1>
                {this.state.comments.map(comments=>
                    
                    <div className="comment"> 
                      <h2>{comments.name}</h2>
                      <p>{comments.body}</p>
                   </div> 
                   )
              }
            </div>
        </div>
    
      );       
}
}


export default Comment;