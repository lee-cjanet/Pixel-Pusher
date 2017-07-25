import React from 'react';
import Modal from 'react-modal';

import PhotosIndex from './photos_index';
import PhotoModalStyle from './photo_modal_style';

class PhotoItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }



  // handleSubmit(e) {
  //   e.preventDefault();
  //   let id = this.props.postid
  //   this.props.deletePost(id);
  // }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }


  render () {
    const { imgId, title, imgUrl, artist, artistImgUrl } = this.props;

    let itemButton=(
    <button className="item-button" onClick={this.openModal}>
      <li className="item">
        <img className="image" src={imgUrl} />

        <div className="overlay">
          <span className="artist">
              { artist }
          </span>
        </div>
      </li>
    </button>
  );

    return (
      <div className="photo-modal-container">
        { itemButton }

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ PhotoModalStyle }
          contentLabel="PhotoDetailModal">

          <div className="photo-modal">
            <img className="image-detail" src={imgUrl} />
            <div className='image-info-detail'>
              <h3 className='title-detail'> "{ title }" </h3>
              <h3 className='artist-detail'>Artist: { artist }</h3>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

}

export default PhotoItem;
