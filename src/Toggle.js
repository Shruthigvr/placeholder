import React, { Component } from 'react';
import './homestyle.css'

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonName: "My Post",
            isToggleOn: true
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    /*Function to handle toggle button click */
    handleClick() {
        this.state.buttonName == "My Post" ?
            this.setState({ buttonName: "All Post" }) :
            this.setState({ buttonName: "My Post" });
        this.props.toggle();
        this.setState(function(prevState) {
            return { isToggleOn: !prevState.isToggleOn };
        });
    }


    render() {
        return (<button className = "add-btn"
                    ref = "button"
                    onClick = { this.handleClick } > { this.state.buttonName } 
                </button>);
    }
}

export default Toggle;