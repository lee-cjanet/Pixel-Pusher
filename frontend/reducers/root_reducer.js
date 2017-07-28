import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import PhotosReducer from './photos_reducer';
import ProfileReducer from './profile_reducer';
import FollowsReducer from './follows_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  images: PhotosReducer,
  user_profile: ProfileReducer,
  follow: FollowsReducer
});

export default RootReducer;
