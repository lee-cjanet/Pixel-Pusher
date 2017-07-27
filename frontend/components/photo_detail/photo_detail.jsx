import React from 'react';
import Modal from 'react-modal';

import PhotoModalStyle from './photo_modal_style';
import PhotosIndex from '../index/photos_index';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }


  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }


  render() {
    const { image_url, title, artist, artist_image_url } = this.props.image;

    let itemButton=(
      <button className="item-button" onClick={this.openModal}>
          <img className="image" src={image_url} />
          <div className="overlay">
            <span className="artist">
              <img className="artist-img" src={ artist_image_url } />
              { artist }
            </span>
          </div>
      </button>
    );

    return(
      <div className="photo-modal-container">
        { itemButton }

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={ PhotoModalStyle }
            contentLabel="PhotoDetailModal">

            <div className="photo-modal">
              <img className="image-detail" src={image_url} />
              <div className='image-info-detail'>
                <h3 className='title-detail'> "{ title }" </h3>
                <img className="artist-image" src={artist_image_url} />
                <h3 className='artist-detail'>Artist: { artist }</h3>
              </div>
            </div>
          </Modal>

      </div>
    );
  }
}

export default PhotoDetail;
