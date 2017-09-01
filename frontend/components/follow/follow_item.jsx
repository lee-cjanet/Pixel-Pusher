import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import FollowProfile from './follow_profile';

class FollowProfileItem extends React.Component {
  render() {
    let { id, name, headshot_url } = this.props.user;

    return (
        <Link to={`/user/${id}`}>
          <li className="follow-item">
            <img className="profile-image"
              src={headshot_url} />
            <span className="username">
              { name }
            </span>
          </li>
        </Link>
    );
  }
}

export default FollowProfileItem;
