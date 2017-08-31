import { connect } from 'react-redux';

import UserProfile from './user_profile';
import { fetchUserProfile, fetchUserPhotos, resetProfile } from '../../actions/profile_actions';
import { selectAllGurus, selectAllFollowers } from '../../reducers/selectors';


const mapStateToProps = state => {
  return {
    personalprofile: Boolean(state.session.currentUser.id === state.user_profile.user.id),
    follows: state.user_profile.user.follows,
    user: state.user_profile.user,
    currentUser: state.session.currentUser.id,
    followers: selectAllFollowers(state.user_profile.user),
    gurus: selectAllGurus(state.user_profile.user)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserProfile: (id) => dispatch(fetchUserProfile(id)),
  fetchUserPhotos: (id) => dispatch(fetchUserPhotos(id)),
  resetProfile: () => dispatch(resetProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
