import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
				<div className="content">
  					<div className="job-card">
  					<h1>{this.props.title}</h1>
  					<article>{this.props.body}</article>
  					</div>	
			</div>
			</div>
        )
    }
}
export default Card;