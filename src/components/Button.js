import React from 'react';
import { TouchableOpacity, Button as Btn, Text, StyleSheet } from 'react-native';

const Button = ({title, btnColor, onPress}) => {
  return (
    <TouchableOpacity style={{...styles.background, color: btnColor? btnColor: 'white', borderColor: btnColor? btnColor: 'white'}} onPress={() => {onPress()}}>
      <Text style={{...styles.button, color: btnColor? btnColor: 'white'}}>{title}</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  background: {
    borderRadius: 5,
    borderWidth: 2,
    height: 48
  },
  button: {
    fontSize: 20,
    marginTop: 9,
    alignSelf: 'center'
  }
});

export default Button;
