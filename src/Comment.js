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

        /*To display comments of clicked post */
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
              <h1 className= "header">COMMENTS</h1>
                {
                  /*Looping comments */
                  this.state.comments.map(comment=>
                    <div className="comment"> 
                      <h2>{comment.name}</h2>
                      <p>{comment.body}</p>
                   </div> 
                   )
              }
            </div>
        </div>
    
      );       
}
}


export default Comment;