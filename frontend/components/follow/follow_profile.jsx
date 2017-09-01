import React, { Component } from 'react';
import FollowProfileItem from './follow_item';

class FollowProfile extends React.Component {
  constructor(props) {
    super(props);


  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ followers: nextProps.followers });
  //   this.setState({ gurus: nextProps.gurus });
  // }

  render () {
    return (
      <div className="user-sec-3-container">
        {this.props.users.map((user, idx) =>
          <FollowProfileItem
            key={ idx }
            user={ user }
          />)}
      </div>
    );
  }
}

export default FollowProfile;


// <PhotoDetail
//   key={ idx }
//   image={ image }
// />
