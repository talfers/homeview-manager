import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { boxShadow } from '../styles/styles';

const InfoCard = ({title, iconName, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)} style={styles.container}>
      <MaterialCommunityIcons name={iconName} size={30}/>
      <View><Text style={styles.title}>{title}</Text></View>
      <Text>Hello</Text>
      <Text>World</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {

    marginHorizontal: '2.5%',
    marginVertical: 16,
    padding: 16,
    borderRadius: 10,
    width: '45%',
    ...boxShadow,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 18
  }
})

export default InfoCard;
