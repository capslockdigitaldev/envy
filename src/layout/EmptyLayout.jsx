import React, { Component } from 'react';

class EmptyLayout extends Component {
    render() {
        return (
            <div className="login-body-wrapper login-body-login">
                {this.props.children}
            </div>
        );
    }
}

export default EmptyLayout;