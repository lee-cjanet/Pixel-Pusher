import React from 'react';

class PhotoItem extends React.Component {
  constructor (props) {
    super(props);
  }


  // handleSubmit(e) {
  //   e.preventDefault();
  //   let id = this.props.postid
  //   this.props.deletePost(id);
  // }

  render () {
    const { imgId, title, img_url, artist, artist_img_url } = this.props;

    return (
      <li>
        {<img src={img_url} alt={ title } style="width:304px;height:228px;" />}
      </li>
    );
  }

}

export default PhotoItem;
