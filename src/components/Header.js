import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({title}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: '#888',
    alignSelf: 'center'
  }
})

export default Header;
