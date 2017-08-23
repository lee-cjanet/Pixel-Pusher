import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Welcome from './welcome/welcome';
import PhotosIndexContainer from './index/photos_index_container';
import UserProfileContainer from './user_profile/user_profile_container';


const App = () => (
  <div className="container">
    <Switch>
      <ProtectedRoute exact path="/user/:id" component={UserProfileContainer} />
      <Route path="/index" component={PhotosIndexContainer} />
      <Route path="/" component={Welcome} />
    </Switch>
  </div>
);

export default App;


// <Route path="/login" component={SessionFormContainer} />
// <Route path="/signup" component={SessionFormContainer} />
