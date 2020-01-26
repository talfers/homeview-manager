import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { boxShadow } from '../styles/styles';

const ActionBar = ({title, routeName, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)} style={styles.container}>
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
    marginHorizontal: 20,
    marginVertical: 12,
    padding: 16,
    borderRadius: 10,
    ...boxShadow,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 16
  }
})

export default withNavigation(ActionBar);
