import React from 'react';
import { withRouter } from 'react-router-dom';

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  this.props.fetchAllPhotos();
  }


  handleSubmit(e) {
    e.preventDefault();
    // const user = this.state;
    // this.props.signup(user);
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const images = this.props.images;
    console.log(this.props);

    return (
      <div className="photos-index-container">
        <h1> All Pictures </h1>
        {this.renderErrors()}

        <ul className="images">
          {images.map(image =>
            <PhotoItem
              key={ image.id }
              imgId={ image.id }
              title={ image.title }
              img_url={ image.image_url}
              artist={ image.artist }
              artist_img_url= { image.artist_image_url }
              />)}
        </ul>
      </div>
    );
  }


}


export default withRouter(PhotosIndex);
