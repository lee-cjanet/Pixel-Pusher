import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
const shuffle = require('knuth-shuffle').knuthShuffle;

import PhotoItem from './photo_item';
import SessionFormContainer from '../session_form/sesh_form_container';
// import InfiniteScroll from 'infinite-scroll';

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAllPhotos();
  }


  render() {
    let images = this.props.images;
    images = shuffle(images);

    let masonryOptions = {
      transitionDuration: 1,
      gutter: 0,
      fitWidth: true
    };

    return (
      <div className="photos-index-container">
        <span className="quote"> Difficult     <br/>roads<br/> often  lead <br/>to a beautiful<br/> destination. </span>

        <SessionFormContainer />

        <Masonry className={"photos-index"}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={ false }
          updateOnEachImageLoad={ false }
          >
          {images.map(image =>
            <PhotoItem
              key={ image.id }
              imgId={ image.id }
              title={ image.title }
              imgUrl={ image.image_url}
              artist={ image.artist }
              artistImgUrl= { image.artist_image_url }
              />)}
          )}
        </Masonry>
      </div>
    );
  }

}


export default withRouter(PhotosIndex);
