import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import PhotoModalStyle from './photo_modal_style';
import PhotosIndex from '../index/photos_index';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
    console.log(this.props);

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
    const { user_id, image_url, title, artist, artist_image_url } = this.props.image;

    let itemButton=(
      <button className="item-button" onClick={this.openModal}>
        <li className="item">
          <img className="image" src={image_url} />
          <div className="overlay">
            <span className="artist">
              { artist }
            </span>
          </div>
        </li>
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

              <Link to={`/user/${user_id}`}>
                <img className="artist-image" src={artist_image_url} />
              </Link>
              <Link to={`/user/${user_id}`}>
                <h3>Artist: { artist }</h3>
              </Link>
              </div>
            </div>
          </Modal>

      </div>
    );
  }
}

export default PhotoDetail;


// <img className="artist-img" src="{ artist_image_url }" />
