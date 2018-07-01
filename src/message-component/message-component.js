import React, { Component } from 'react';

class MessageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { vis: props.vis };
    }

    petuchan() {
        this.setState({
            vis: "none"
        });
    }

    render() {
        return (<div onClick={() => this.petuchan()} style={{display: this.state.vis }}>
            <p>{this.props.name}</p>
            <p>{this.props.description}</p>
        </div>);
    }
}

export default MessageComponent;


