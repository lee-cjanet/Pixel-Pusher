import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import EditForm from './edit_form';
import { updateUser } from '../../../actions/profile_actions';


const mapStateToProps = (state, { match }) => {
  return {
    name: state.user_profile.user.name,
    bio: state.user_profile.user.bio,
    cover_url: state.user_profile.user.cover_url,
    headshot_url: state.user_profile.user.headshot_url
  };
};

const mapDispatchToProps = dispatch => ({
  // fetchUserPhotos: (id) => dispatch(fetchUserPhotos(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);



const mapDispatchToProps = dispatch => ({
  updateUser: (user, id) => dispatch(updateUser(user, id)),
  receiveUserErrors: (errors) => dispatch(receiveUserErrors(errors))
