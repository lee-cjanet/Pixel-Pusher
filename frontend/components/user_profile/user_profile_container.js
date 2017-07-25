import { connect } from 'react-redux';

import UserProfile from './user_profile';
import { fetchUserProfile, fetchUserPhotos } from '../../actions/profile_actions';
import { selectAllUserPhotos } from '../../reducers/selectors';


const mapStateToProps = ({ user_profile, session }) => {
  return {
    personalprofile: Boolean(session.currentUser.id === user_profile.user.id),
    user: user_profile.user,
    images: selectAllUserPhotos(user_profile)
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
