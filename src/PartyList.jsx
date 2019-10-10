import Party from './Party.jsx';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

type PartyListProps = {|
  parties: Array<*>,
|};

const PartyList = ({parties}: PartyListProps) => {
  return (
    <FlatList 
      data={parties}
      renderItem={({item}) => <Party key={item.name} details={item} />}
    />
  );
};

export default PartyList;