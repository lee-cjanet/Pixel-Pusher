import { connect } from 'react-redux';

import UserPhotos from './user_photos';
import { fetchUserPhotos } from '../../../actions/profile_actions';
import { selectAllUserPhotos } from '../../../reducers/selectors';


const mapStateToProps = (state) => {
  return {
    images: selectAllUserPhotos(state.user_profile)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserPhotos: (id) => dispatch(fetchUserPhotos(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPhotos);
