import { connect } from 'react-redux';

import FollowButton from './follow_button';
import { createFollow, destroyFollow } from '../../actions/follow_actions';


const mapStateToProps = state => {
  return {
    user: state.user_profile.user,
    currentUser: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => ({
  createFollow: (guru_id) => dispatch(createFollow(guru_id)),
  destroyFollow: (guru_id) => dispatch(destroyFollow(guru_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
