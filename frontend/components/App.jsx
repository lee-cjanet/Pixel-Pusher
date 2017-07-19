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
import SessionFormContainer from './session_form/sesh_form_container';

const App = () => (
  <div>
    <header>
      <h1>Pixel Pusher</h1>
    </header>
        <Route path="/login" component={SessionFormContainer} />
        <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
