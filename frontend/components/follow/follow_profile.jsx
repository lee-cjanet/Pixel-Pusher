import React, { Component } from 'react';
import FollowProfileItem from './follow_item';

class FollowProfile extends React.Component {
  constructor(props) {
    super(props);


  }

  componentWillReceiveProps(nextProps) {
    this.setState({ followers: nextProps.followers });
    this.setState({ gurus: nextProps.gurus });
  }

  render () {
    return (
      <ul className="follow-profile-container">
        {this.props.followers.map((user, idx) =>
          <FollowProfileItem key={ idx } user={ user }/>
          )}
      </ul>
    );
  }
}

export default FollowProfile;


// <PhotoDetail
//   key={ idx }
//   image={ image }
// />
