import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


class FollowButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showsFollowers: true,
      userId: parseInt(this.props.userId)
    };

    this.handleSubmit.bind(this);
    // this.followButton().bind(this);
    // this.unfollowButton().bind(this);
  }

  componentDidMount() {
    this.props.fetchGurus({guru_id: this.state.userId});
    this.props.fetchFollowers(this.state.userId);
  }


  handleSubmit(submitAction) {
    return(e) => {
      e.preventDefault();
      e.stopPropagation();

      if (submitAction === this.props.followGuru) {
        this.props.followGuru({ guru_id: this.state.userId });
      } else {
        this.props.unfollowGuru(this.state.userId);
      }

      submitAction(this.state.userId);
    };
  }

  follows() {
    let doesFollow = this.props.followers.includes(this.state.userId);

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
