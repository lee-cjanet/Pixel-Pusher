import { connect } from 'react-redux';
import { followGuru, receiveErrors, fetchGurus, fetchFollowers, unfollowGuru } from '../../actions/follow_actions';
import FollowButton from './follows';
import { selectFollowers, selectGurus } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    followers: selectFollowers(state.follow),
    gurus: selectGurus(state.follow),
    ownProps
  };
};

const mapDispatchToProps = dispatch => ({
  followGuru: guru => dispatch(followGuru(guru)),
  fetchGurus: follower => dispatch(fetchGurus(follower)),
  fetchFollowers: guru => (fetchFollowers(guru)),
  unfollowGuru: guru => dispatch(unfollowGuru(guru))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
