import PartyList from './PartyList.jsx';
import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

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

const Header = () => (
  <View style={styles.header}>
   <Image 
    style={styles.icon} 
    source={{uri: 'https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png'}}/>
    <Text style={styles.headerText}>Orgynizer</Text>
  </View>
);

const Home = () => (
  <View>
    <Header/>
    <View style={styles.listContainer}>
      <PartyList parties={fakePartyData}/>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    flexGrow: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    height: 32,
    width: 32,
  },
  listContainer: {
    padding: 12,
  }
});

export default Home;