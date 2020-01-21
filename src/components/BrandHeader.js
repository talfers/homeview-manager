import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from './Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { bottomShadow } from '../styles/styles';

const brand = require('../../assets/brand/door32.png');

const BrandHeader = ({logo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}><Image source={brand}/></View>
      <Header title={"Homeview"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#C4DBF6',
    ...bottomShadow,
    zIndex: 99
  },
  logo: {
    minHeight: 10,
    marginRight: 4,
  }
})

export default BrandHeader;
