import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
const shuffle = require('knuth-shuffle').knuthShuffle;

import PhotoItem from './photo_item';
// import InfiniteScroll from 'infinite-scroll';

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAllPhotos();
  }

  // divDivider() {
  //
  //   const num = Math.floor(images.length / 4);
  //   return (
  //     <div className="index-column-1">images.slice(0, num)</div>
  //     <div className="index-column-2">images.slice(num, (num*2))</div>
  //     <div className="index-column-3">images.slice((num*2), (num*3)</div>
  //     <div className="index-column-4">images.slice((num*3))</div>
  //   )
  // }


  render() {
    let images = this.props.images;
    images = shuffle(images);

    let masonryOptions = {
      transitionDuration: 1,
      gutter: 30,
      fitWidth: true
    };

    return (
      <div className="photos-index-container">
        <h1> Difficult roads often lead to a beautiful destination. </h1>

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
