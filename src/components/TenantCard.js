import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { boxShadow } from '../styles/styles';

const TenantCard = ({tenant}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text></Text>
      <View></View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 136,
    width: 124,
    margin: '5%',
    backgroundColor: 'lightgreen'
  }
})

export default TenantCard;
