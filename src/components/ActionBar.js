import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ActionBar = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View><Text style={styles.title}>{title}</Text></View>
      <View><MaterialCommunityIcons name={'arrow-right'} size={30}/></View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 16
  }
})

export default ActionBar;
