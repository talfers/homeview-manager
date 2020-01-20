import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({title, propStyle}) => {
  return (
    <View>
      <Text style={{...styles.text, ...propStyle}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: '#04133d'
  }
})

export default Header;
