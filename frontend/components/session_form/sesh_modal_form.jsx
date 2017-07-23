import React from 'react';
import Modal from 'react-modal';
// import ModalStyle from 'modal_style';
import { withRouter } from 'react-router-dom';

import SessionForm from './sesh_form';
import sessionFormStyle from './sesh_form_style';


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
    this.props.history.push('/');
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
      this.closeModal();
      toggle_session = (<button className="modal-signin-button" onClick={this.logout_handleSubmit}> logout </button>);
    } else {
      toggle_session = (<button className="modal-signin-button" onClick={this.openModal}>sign up/sign in</button>);
    }

    return(
      <div className= "window-container">
        { toggle_session }

        <Modal className="session-modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ sessionFormStyle }
          contentLabel="sessionForms">

          <SessionForm errors={ this.props.errors } login={ this.props.login } signup={ this.props.signup }/>

        </Modal>
      </div>
    );
  }
}

export default withRouter(SessionModalForm);
