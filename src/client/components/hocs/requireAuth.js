import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      // this.props.auth => can return 3 possible values null, false, and object with user details
      switch (this.props.auth) {
        case false:
          return <Redirect to='/' />;
        case null:
          return <div>Loading...</div>; // we have not yet fetched the user's authentication state
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  const mapStateToprops = ({ auth }) => ({ auth });

  return connect(mapStateToprops)(RequireAuth);
};
