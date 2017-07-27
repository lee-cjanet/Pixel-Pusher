import { connect } from 'react-redux';
import { createSinglePhoto } from '../../actions/photo_actions';
import UploadForm from './upload_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.pins.errors,
    currentUser: state.session.currentUser,
    ownProps
  };
};

const mapDispatchToProps = dispatch => ({
  createSinglePhoto: image => dispatch(createSinglePhoto(image))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(UploadForm);
