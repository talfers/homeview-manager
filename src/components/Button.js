import React from 'react';
import { TouchableOpacity, Button as Btn, Text, StyleSheet } from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.background} onPress={() => {onPress()}}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  background: {
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 2,
    height: 48
  },
  button: {
    fontSize: 20,
    marginTop: 9,
    alignSelf: 'center',
    color: 'white'
  }
});

export default Button;
