import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


class FollowButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showsFollowers: true
    };

    this.handleSubmit.bind(this);
    // this.followButton().bind(this);
    // this.unfollowButton().bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchGurus(this.props.userId);
    this.props.fetchFollowers(this.props.userId);
  }


  handleSubmit(submitAction) {
    return(e) => {
      e.preventDefault();
      e.stopPropagation();

      submitAction(this.props.userId);
    };
  }

  follows() {
    let doesFollow = this.props.followers.includes(this.props.userId);

    return doesFollow;
  }


  render() {
    const { unfollowGuru, followGuru } = this.props;

    let toggleButton;

    if (this.follows()) {
      toggleButton = (<button className="follow-button" onClick={this.handleSubmit(unfollowGuru)} > unfollow </button>);
    } else {
      toggleButton = (<button className="follow-button" onClick={this.handleSubmit(followGuru)} > follow </button>);
    }

    return (
      <div className="follow-button-container">
      { toggleButton }
      </div>
    );
  }
}

export default FollowButton;
