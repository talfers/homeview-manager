import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({title, style}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    textShadowColor: 'grey',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
    color: 'white'
  }
})

export default Header;
