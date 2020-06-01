import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersListPage extends Component {
  renderUsers() {
    return this.props.users.map((user) => <li key={user.id}>{user.name}</li>);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        Here is list of users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
  loadData,
};
