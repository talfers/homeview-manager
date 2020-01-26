import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({main, secondary}) => {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemRight}>
        <Text>{main[0]}</Text>
        <Text style={styles.desc}>{main[1]}</Text>
      </View>
      <View style={styles.itemLeft}>
        <Text>{secondary[0]}</Text>
        <Text style={styles.desc}>{secondary[1]}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,

  },
  desc: {
    color: 'grey',
    fontSize: 10
  },
  itemRight:{
    textAlign: 'right'
  }
});

export default ListItem;
