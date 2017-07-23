import { connect } from 'react-redux';

import PhotosIndex from './photos_index';
import { fetchAllPhotos, fetchSinglePhoto, receiveErrors, clearErrors } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    images: selectAllPhotos(state),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  fetchSinglePhoto: (id) => dispatch(fetchSinglePhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosIndex);
