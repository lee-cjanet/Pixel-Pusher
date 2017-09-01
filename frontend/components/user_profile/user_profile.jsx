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

  updateState() {

  }

  renderType(type) {
    event.preventDefault();
    return event => this.setState({ type: type});

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

  viewSection(type) {
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
    console.log(this.state);
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
        <div className="profile-sec-2">

          <img className="headshot" src={headshot_url} />

          <div className="info-section">
            <label className="name"> { name } </label>
            <p className="bio"> " { bio } " </p>
            { personalButton }
          </div>
        </div>

        <div className="links-nav">
          <Link to="/index"> home </Link>
          <button className={this.state.type === "photos" ? "currentNav" : "nav-buttons"}
            onClick={this.renderType("photos")}>
             photos
             {this.state.type === "photos" ?
               <img className="image" src={TRIANGLE} /> : <div></div>
             }
          </button>
          <button className={this.state.type === "followers" ? "currentNav" : "nav-buttons"}
            onClick={this.renderType("followers")}>
             followers
          </button>
          <button className={this.state.type === "following" ? "currentNav" : "nav-buttons"}
            onClick={this.renderType("following")}>
             following
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
