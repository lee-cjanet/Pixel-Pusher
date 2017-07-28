import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';

import PhotoDetail from '../../photo_detail/photo_detail';

class UserPhotos extends React.Component {
  constructor(props) {
    super(props);

  }



  componentWillReceiveProps(nextProps) {
    this.setState({ images: nextProps.images });
  }

  render() {
    const { images } = this.props;

    let masonryOptions = {
      transitionDuration: 1,
      gutter: 0,
      fitWidth: true
    };


    return (
      <div className={"user-photos-container"}>
        <Masonry
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

export default UserPhotos;
