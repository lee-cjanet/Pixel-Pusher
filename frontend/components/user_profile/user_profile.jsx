import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchUserProfile(this.props.match.params.id);
  }

  render() {
    let { name, bio, headshot_url, cover_url } = this.props.user;
    headshot_url || "https://ak3.picdn.net/shutterstock/videos/6441428/thumb/1.jpg?i10c=img.resize(height:160)";

    cover_url || "http://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680432/2017-7-21/Greg/1_aperture-vintage-212345.jpg";

    return (
      <div className="profile-container">
        hey
        
        <img className="cover" src={cover_url} />

        <div className="profile-sec-2">
          <img className="headshot" src={headshot_url} />

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
