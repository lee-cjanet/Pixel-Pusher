import { connect } from 'react-redux';

import UserProfile from './user_profile';
import { fetchUserProfile, fetchUserPhotos } from '../../actions/profile_actions';
import { selectAllUserPhotos } from '../../reducers/selectors';


const mapStateToProps = (state) => {
  return {
    personalprofile: Boolean(state.session.currentUser.id === location.pathname.slice(1)),
    user: state.user_profile.user,
    currentUser: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserProfile: (id) => dispatch(fetchUserProfile(id)),
  fetchUserPhotos: (id) => dispatch(fetchUserPhotos(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
