import React from 'react';
import { Switch } from 'react-router';

import 'rsuite/dist/styles/rsuite-default.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import './styles/main.scss'
import Home from './styles/pages/Home';
import SignIn from './styles/pages/SignIn';

function App() {
  return <Switch>
    <PublicRoute path="/signin">
      <SignIn />
    </PublicRoute>
    <PrivateRoute path="/">
      <Home />
    </PrivateRoute>
  </Switch>;
}

export default App;
