import React, { Component } from 'react';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.follows) {
      this.props.destroyFollow(this.props.userId);
    } else {
      this.props.createFollow(this.props.userId);
    }
  }

  toggleFollow() {
    if (this.props.follows) {
      return "unfollow";
    } else {
      return "follow";
    }
  }

  render() {
    let toggleFollow;
    if (this.props.follows) {
      toggleFollow = "unfollow";
    } else {
      toggleFollow = "follow";
    }

    return (
      <div>
        <button className="upload-follow-button"
          onClick={this.handleSubmit}>
           { toggleFollow }
        </button>
      </div>
    );
  }
}

export default FollowButton;
