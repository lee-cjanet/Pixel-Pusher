import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserPhotos from './user_photos/user_photos_container';
import UploadModal from '../upload/upload_modal';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserProfile(this.props.match.params.id);
    this.props.fetchUserPhotos(this.props.match.params.id);
  }


  render() {
    let { id, name, bio, headshot_url, cover_url } = this.props.user;


    // cover_url || cover_url = "http://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680432/2017-7-21/Greg/1_aperture-vintage-212345.jpg";

    if (!cover_url) {
      cover_url = "http://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680432/2017-7-21/Greg/1_aperture-vintage-212345.jpg";
    }

    return (
      <div className="profile-container" >



        <div className="profile-sec-2">
          <div className="headshot">
            <img src={headshot_url} />
          </div>

          <div className="info-section">
            <label className="name"> { name } </label>
            <p className="bio"> " { bio } " </p>
          </div>
        </div>

        <UploadModal />
        <UserPhotos userId={id}/>

      </div>
    );
  }
}

export default UserProfile;


        // <img className="cover" src={ cover_url } />
