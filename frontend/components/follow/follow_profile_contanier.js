// import { connect } from 'react-redux';
//
// import FollowProfileItem from './follow_item';
// import { fetchUserProfile, fetchUserPhotos, resetProfile } from '../../actions/profile_actions';
//
//
// const mapStateToProps = state => {
//   return {
//
//     follows: state.user_profile.user.follows,
//     user: state.user_profile.user,
//     currentUser: state.session.currentUser.id,
//     followers: selectAllFollowers(state.user_profile.user) || {},
//     gurus: selectAllGurus(state.user_profile.user) || {}
//   };
// };
//
// const mapDispatchToProps = dispatch => ({
//   fetchUserProfile: (id) => dispatch(fetchUserProfile(id)),
//   fetchUserPhotos: (id) => dispatch(fetchUserPhotos(id)),
//   resetProfile: () => dispatch(resetProfile())
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FollowProfileItem);
