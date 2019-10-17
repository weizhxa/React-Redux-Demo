import React from 'react';

class Add extends React.Component {

    render() {
        return (
            <li key={this.props.key}>{this.props.item}</li>
        );
    }
}

export default Add;
