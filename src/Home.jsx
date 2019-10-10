import PartyList from './PartyList.jsx';
import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => (
  <View style={styles.header}>
   <Image 
    style={styles.icon} 
    source={{uri: 'https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png'}}/>
    <Text style={styles.headerText}>Orgynizer</Text>
  </View>
);

const Home = () => {
  const parties = useSelector(state => state.parties.parties);
  return (
    <View>
      <Header/>
      <View style={styles.listContainer}>
        <PartyList parties={parties}/>
      </View>
    </View>
  );
};

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