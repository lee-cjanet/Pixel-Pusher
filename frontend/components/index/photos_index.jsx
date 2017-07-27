import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
const shuffle = require('knuth-shuffle').knuthShuffle;

import SessionFormContainer from '../session_form/sesh_form_container';
import PhotoDetail from '../photo_detail/photo_detail';
// import InfiniteScroll from 'infinite-scroll';

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAllPhotos();
  }


  render() {
    let images = shuffle(this.props.images);

    let masonryOptions = {
      transitionDuration: 1,
      gutter: 0,
      fitWidth: false
    };

    return (
      <div className="photos-index-container">
        <div className="sidenav">
          <span className="quote"> Difficult     <br/>roads<br/> often  lead <br/>to a beautiful<br/> destination. </span>

          <SessionFormContainer />
        </div>

        <Masonry className={"photos-index"}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={ false }
          updateOnEachImageLoad={ false }
          >
          {images.map(image =>
            <PhotoDetail
              key={ image.id }
              image={ image }
              />)}
        </Masonry>
      </div>

    );
  }

}


export default withRouter(PhotosIndex);
