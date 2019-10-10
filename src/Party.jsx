import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Party = ({details}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header}>
          <Text>{details.name}</Text>
          <Text>{details.company}</Text>
        </View>
        <Text>{details.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
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
  header: {
    flexDirection: 'row',
    flexGrow: 1,
  },
});

export default Party;