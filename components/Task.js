import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {green, background} from '../theme/colors';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular} />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: background,
    padding: 15,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignitems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: green,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: green,
    borderWidth: 2,
    borderRadius: 5,
  },
});
export default Task;
