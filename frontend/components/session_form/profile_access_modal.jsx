import React from 'react';
import Modal from 'react-modal';
import { withRouter, Link } from 'react-router-dom';

import SessionForm from './sesh_form';



const style = {
  // overlay --> styling for the "screen" behind the modal
  overlay : {
    position        : 'fixed',
    width           : '100vw',
    height          : '100vh',
    display         : 'flex',
    alignItems      : 'center',
    justifyContent  : 'center',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundImage : "url(http://res.cloudinary.com/smilejl/image/upload/c_scale,o_55,w_1300/v1500939068/Splash%20page/yang-song-15342.jpg)",
    zIndex          : 10
  },
  // content --> styling for the modal container
  content : {
    backgroundColor : 'white',
    display         : 'flex',
    alignItems      : 'center',
    justifyContent  : 'center',
    // position        : 'fixed',
    // bottom          : '100px',
    // left            : '30px',
    padding         : '22px 22px 44px 22px',
    height          : '400px',
    width           : '300px',
    zIndex          : 13,
    borderRadius    : '8px',
    boxShadow       : '3px 3x 5px darkslategrey',
  }
};


class ProfileAccessModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: true,
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

    return(
      <div className="profile-access-form">
        <Modal className="profile-access"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ style }
          contentLabel="profile-access">

          <div className="profile-access-container">
            <SessionForm errors={ this.props.errors } login={ this.props.login } signup={ this.props.signup } />
          </div>

        </Modal>
      </div>
    );
  }
}

export default withRouter(ProfileAccessModal);
