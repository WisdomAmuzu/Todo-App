import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#00ffff',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    width: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#00ffff',
    borderWidth: 2,
    borderRadius: 5,
  },

});

export default Task;