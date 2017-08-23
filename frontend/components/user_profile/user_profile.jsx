import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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

    let personalButton;

    if (this.props.personalprofile) {
      personalButton = (<UploadModal />);
    }
    // else {
    //   personalButton = (<FollowButtonContainer userId={this.props.match.params.id} />);
    // }


    return (
      <div className="profile-container" >



        <div className="profile-sec-2">

          <img className="headshot" src={headshot_url} />

          <div className="info-section">
            <label className="name"> { name } </label>
            <p className="bio"> " { bio } " </p>
          </div>
        </div>

        <div className="links-nav">
          <Link to="/index"> home </Link>

          { personalButton }


        </div>

        <UserPhotos userId={id}/>

      </div>
    );
  }
}

export default UserProfile;


        // <img className="cover" src={ cover_url } />

// <Link to={`/user/${this.props.currentUser}`}> yours </Link>
