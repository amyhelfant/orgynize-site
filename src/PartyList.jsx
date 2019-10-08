import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

type PartyListProps = {|
  parties: Array<*>,
|};

const PartyItem = ({name}) => (
  <View style={styles.item}>
    <Text>{name}</Text>
  </View>
);

const PartyList = ({parties}: PartyListProps) => (
    <FlatList data={parties} renderItem={({item}) => <PartyItem key={item.name} name={item.name} />}/>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding: 12,
  },
});

export default PartyList;