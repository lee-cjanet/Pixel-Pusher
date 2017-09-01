import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import UserPhotos from './user_photos/user_photos_container';
import FollowButtonContainer from '../follow/follow_button_container';
import FollowProfile from '../follow/follow_profile';
import UploadModal from '../upload/upload_modal';

const TRIANGLE = "http://res.cloudinary.com/smilejl/image/upload/v1504249965/pixelpusher%20screenshots/triangleNav.png";


class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "photos",
    };

    this.renderType = this.renderType.bind(this);
    this.viewSection = this.viewSection.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserProfile(this.props.match.params.id);
    this.props.fetchUserPhotos(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.resetProfile();
  }

  renderType(type) {
    event.preventDefault();
    return event => this.setState({ type: type });
  }

  viewSection() {
    let { id } = this.props.user;

    if (this.state.type === "followers") {
      return (
        <FollowProfile
          users={this.props.followers}
          />
      );
    } else if (this.state.type === "following") {
      return (
        <FollowProfile
          users={this.props.gurus}
          />
      );
    } else {
      return (
        <UserPhotos userId={id}/>
      );
    }
  }

  render() {
    let { id, name, bio, headshot_url, cover_url } = this.props.user;

    let personalButton;

    if (this.props.personalprofile) {
      personalButton = (<UploadModal />);
    }
    else {
      personalButton = (<FollowButtonContainer userId={id} follows={this.props.follows}/>);
    }


    return (
      <div className="profile-container" >
        <section className="top-nav">
          <Link to="/index">
            <img
              className="home-button"
              src="http://res.cloudinary.com/smilejl/image/upload/c_scale,w_50/v1504288534/pixelpusher screenshots/green-back-button-icon-65921.png"/>
          </Link>
        </section>
        <div className="profile-sec-2">

          <img className="headshot" src={headshot_url} />

          <section className="info-section">
            <div className="info-section-divider">
              <div className="bio-section">
                <label className="name"> { name } </label>
                <p className="description"> " { bio } " </p>
              </div>
              <div className="upload-follow-div">
                { personalButton }
              </div>
            </div>
          </section>
        </div>

        <div className="links-nav">
            <button className={this.state.type === "photos" ? "currentNav" : "nav-buttons"}
              onClick={this.renderType("photos")}>
               photos
               {this.state.type === "photos" ?
                 <img className="triangle" src={TRIANGLE} /> : <div></div>
               }
            </button>

            <button className={this.state.type === "followers" ? "currentNav" : "nav-buttons"}
              onClick={this.renderType("followers")}>
               followers
               {this.state.type === "followers" ?
                 <img className="triangle" src={TRIANGLE} /> : <div></div>
               }
            </button>

            <button className={this.state.type === "following" ? "currentNav" : "nav-buttons"}
              onClick={this.renderType("following")}>
               following
               {this.state.type === "following" ?
                 <img className="triangle" src={TRIANGLE} /> : <div></div>
               }
            </button>
        </div>

        { this.viewSection() }
      </div>
    );
  }
}

export default UserProfile;


        // <img className="cover" src={ cover_url } />

// <Link to={`/user/${this.props.currentUser}`}> yours </Link>
