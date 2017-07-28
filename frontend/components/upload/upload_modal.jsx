import React from 'react';
import Modal from 'react-modal';

import UploadFormContainer from './upload_form_container';


const style = {
  overlay : {
    position                   : 'fixed',
    top                        : 0,
    left                       : 0,
    right                      : 0,
    bottom                     : 0,
    backgroundColor            : 'rgba(0, 0, 0, .6)',
    zIndex                     : 10
  },
  content : {
    position                   : 'relative',
    right                      : '25%',
    left                       : '25%',
    top                        : '16%',
    display                    : 'flex',
    justifyContent             : 'center',
    alignContent               : 'center',
    overflow                   : 'none',
    width                      : '700px',
    height                     : '600px',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    zIndex                     : 11,
  }
};



class UploadModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
  if (nextProps) {
    this.closeModal();
  }
}

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }


  render() {

    let uploadButton=(
      <button className="upload-button" onClick={this.openModal}>
        - upload -
      </button>
    );

    return(
      <div className="upload-modal-container">
        { uploadButton }

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={ style }
            contentLabel="PhotoDetailModal">

            <UploadFormContainer
              closeModal={this.Modal}
              />
          </Modal>

      </div>
    );
  }
}

export default UploadModal;
