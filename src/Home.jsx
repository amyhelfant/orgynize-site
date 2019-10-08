import PartyList from './PartyList.jsx';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const fakePartyData = [
  {name: 'Fetish Tribe'},
  {name: 'Chemistry'},
  {name: 'Lady Euphoria'},
  {name: 'The Wink'},
  {name: 'NSFW'},
  {name: 'Hacienda House'},
  {name: 'Playscapes'},
  {name: 'Wonderland'},
  {name: 'Skirt Club'},
  {name: 'Inferno'},
];

const Home = () => (
  <View>
    <View style={styles.header}>
      <Text style={styles.headerText}>Orgynizer</Text>
    </View>
    <PartyList parties={fakePartyData}/>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    textAlign: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default Home;