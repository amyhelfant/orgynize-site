import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import Router from './src/Router.jsx';
import reducer from './reducers/index.js';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Router/>
    </View>
  </Provider>
); 

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'purple',
  }
});

export default App;

AppRegistry.registerComponent('Orgynizer (App)', () => App);