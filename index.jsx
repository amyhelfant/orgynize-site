import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Router from './src/Router.jsx';

const App = () => (
  <View style={styles.container}>
    <Router/>
  </View>
); 

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'purple',
  }
});

export default App;

AppRegistry.registerComponent('Orgynizer (App)', () => App);