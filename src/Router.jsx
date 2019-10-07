import Home from './Home.jsx';
import React from 'react';
import {NativeRouter, Route} from 'react-router-native';

const Router = () => (
  <NativeRouter>
    <Route exact path={'/'} component={Home}/>
  </NativeRouter>
);

export default Router;