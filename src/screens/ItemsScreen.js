import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ItemsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={item => String(item)}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.leftItem}>
                <Text>{item}</Text>
                <Text>Item Title</Text>
                <Text style={styles.desc}>This is the item's long description for this item.</Text>
              </View>
              <View style={styles.rightItem}>
                <Text>See more</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {
    padding: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rightItem: {
    flex: 1
  },
  leftItem: {
    flex: 4,
    marginRight: 12
  },
  desc: {
    color: 'grey'
  }
})

export default ItemsScreen;
