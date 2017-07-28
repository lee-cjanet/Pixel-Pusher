import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import UserPhotos from './user_photos/user_photos_container';
import UploadModal from '../upload/upload_modal';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    this.props.fetchUserProfile(this.props.match.params.id);
    this.props.fetchUserPhotos(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchUserProfile(parseInt(nextProps.match.params.id))
      .then(()=> {
        this.props.fetchUserPhotos(parseInt(nextProps.match.params.id));
      });
    }
    this.render();
  }


  render() {
    let { id, name, bio, headshot_url, cover_url } = this.props.user;


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

        <div className="links-nav">
          <Link to="/index"> home </Link>

          <UploadModal />

          <Link to={`/user/${this.props.currentUser}`}> yours </Link>
        </div>

        <UserPhotos userId={id}/>

      </div>
    );
  }
}

export default UserProfile;


        // <img className="cover" src={ cover_url } />
