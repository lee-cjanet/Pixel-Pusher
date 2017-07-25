import React from 'react';
import { withRouter } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchUserProfile(this.props.params.id);
  }

  render() {
    const { id, name, bio, headshot_url, cover_url } = this.props;

    return (
      <div className="profile-container">

        <img className="cover" src={ cover_url } />

        <div className="profile-sec-2">
          <img className="headshot" src={ headshot_url } />

          <div className="bio">
            <label className="name"> { name } </label>
            <p className="bio"> { bio } </p>
          </div>
        </div>

      </div>
    );
  }
}

export default UserProfile;
