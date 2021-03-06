import React from 'react';
import Modal from 'react-modal';
import { withRouter, Link } from 'react-router-dom';

import SessionForm from './sesh_form';



const style = {
  // overlay --> styling for the "screen" behind the modal
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(66, 66, 66, 0.60)',
    zIndex          : 10
  },
  // content --> styling for the modal container
  content : {
    backgroundColor : 'white',
    position        : 'fixed',
    bottom          : '100px',
    left            : '30px',
    padding         : '22px 22px 44px 22px',
    height          : '250px',
    width           : '200px',
    zIndex          : 13,
    borderRadius    : '8px',
    boxShadow       : '2px 2x 4px darkslategrey'
  }
};


class SessionModalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.logout_handleSubmit = this.logout_handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
  if (nextProps.loggedIn) {
    this.closeModal();
  } else {
    this.render();
  }
}

  logout_handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {

    let toggle_session;

    if (this.props.loggedIn) {
      const { id, name, headshot_url } = this.props.currentUser;
      toggle_session = (
        <div className="logout-toggle">
            <Link className ="personal-profile-link" to={`/user/${id}`}>
              <img className="artist-image" src={ headshot_url } />
              { name }
            </Link>
            <button className="modal-signout-button" onClick={this.logout_handleSubmit}>
              logout
            </button>
        </div>);
    } else {
      toggle_session = (<button className="modal-signin-button" onClick={this.openModal}>sign up/sign in</button>);
    }

    return(
      <div className= "window-container">
        { toggle_session }

        <Modal className="session-modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ style }
          contentLabel="sessionForms">

          <SessionForm errors={ this.props.errors } login={ this.props.login } signup={ this.props.signup } />

        </Modal>
      </div>
    );
  }
}

export default withRouter(SessionModalForm);
