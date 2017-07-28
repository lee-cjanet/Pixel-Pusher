import { connect } from 'react-redux';

import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import SessionModalForm from './sesh_modal_form';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModalForm);
