import React from 'react';
import Dropzone from 'react-dropzone';
import uploadRequest from 'superagent';

const UPLOAD_PRESET = "pagu73u9";
const UPLOAD_URL = "https://api.cloudinary.com/v1_1/smilejl/image/upload";



class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image_url: '',
      location: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }



  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  addImage(image) {
    this.setState({image_url: image.image_url});
  }

  handleSubmit(e) {
    e.preventDefault();
    const image = Object.assign({}, this.state);
    this.props.createSinglePhoto({ image });
    this.props.ownProps.closeModal();
  }

  handleImageUpload(image) {
    let upload = uploadRequest.post(UPLOAD_URL)
                        .field('upload_preset', UPLOAD_PRESET)
                        .field('file', image);

    upload.end((err, response) => {
      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
  }

  displayPicture() {
    if (this.state.image_url === '') {
      return (
        <div className="dropzone-text-container">
          <h4>Place Image or Click here</h4>
        </div>
      );
      } else {
      return (
        <div className="upload-image-container">
          <img className='create-thumbnail' src={this.state.image_url}></img>
        </div>
      );
    }
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
    return (
      <div className="upload-form-container">

        <form onSubmit={this.handleSubmit} className="upload-form">
          <span className='top-message'>
            <h1>Capture + Share</h1>
            <h2>aka
              <span className="upload-text"> u p l o a d </span>
              here
            </h2>
           </span>
          <br/>

          <div className='image-n-input'>
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.handleImageUpload}
              className="create-form-dropzone">

              {this.displayPicture()}
            </Dropzone>

            <div className='input-area'>
              <span className="upload-errors">{ this.renderErrors() }</span>

              <label>
                <span>Title</span>
                <br/>
                <input type="text"
                  className="upload-title-input"
                  value={this.state.title}
                  onChange={this.update('title')}
                />
              </label>
              <br/>

              <label>
                <span>Location (optional)</span>
                <br/>
                <input type="text"
                  className="location-input"
                  value={this.state.location}
                  onChange={this.update('location')}
                />
              </label>

              <input className="upload-button" type="submit" value={'create.'} />
            </div>
          </div>
        </form>

      </div>
    );
  }
}

export default UploadForm;