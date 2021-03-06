import React from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import LoadingBar from '../loading_bar';
import UsersSearch from './users_search';

class UserShow extends React.Component {
  constructor(props) {
    super(props)

    this.handleEdit = this.handleEdit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.navigateToUserForm = this.navigateToUserForm.bind(this);
    this.navigateToUsersSearch = this.navigateToUsersSearch.bind(this);
    this.customerComments = this.customerComments.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleEdit() {
    this.props.history.push(`/users/${this.props.userId}/edit`);
  }

  handleLogout() {
    this.props.logout().then(this.props.history.push(`/login`))
  }

  navigateToUsersSearch() {
    this.props.history.push("users/search");
  }

  navigateToUserForm() {
    this.props.history.push("/customer-form");
  }

  editButton() {
    if (this.props.admin) {
      return (
        <div>
          <button
            onClick={this.handleEdit}
            className="btn">
            Edit Profile</button>
        </div>
      )
    }
  }

  customerSearchContainer() {
    const { admin, customers, fetchUsers } = this.props
    if (admin) {
      return (
        <div className="customer-search-container">
          <h4>Customer Management</h4>
          <div className="admin-buttons">
            <UsersSearch customers={customers} fetchUsers={fetchUsers} />
            <h5 className="or">OR</h5>
            <button
              onClick={this.navigateToUserForm}
              className="btn btn--blue">
              Create a Customer
            </button>
          </div>
        </div>
      )
    }
  }

  customerComments() {
    const { admin, customers, fetchUsers, user } = this.props
    if (admin) {
      return (
        <h5><b>Comment:</b> {user.comment}</h5>
      )
    }
  }

  render() {
    const { user, loading } = this.props;
    if (loading) {
      return (
        <div>
          <LoadingBar />
        </div>
      )
    } else {
      return (
        <div className="profile-page">
          <div className="user-profile">
            <div className="user-profile__photo">
              <img src={window.defaultProfilePhotoURL} />
            </div>
            <div className="user-profile__info">
              <div className="user-profile__info__username">
                <h3>{user.name}</h3>
                {this.editButton()}
              </div>
              <div className="user-profile__info__contact">
                <h5><b>Email:</b> {user.email}</h5>
                <h5><b>Phone Number:</b> {user.phone_number}</h5>
                <h5><b>Address:</b> {user.address}</h5>
                {this.customerComments()}
              </div>
            </div>
          </div>
          {this.customerSearchContainer()}
        </div>
      )
    }
  }
}

export default withRouter(UserShow)
