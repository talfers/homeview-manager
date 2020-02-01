import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { lightBlue, darkBlue, blue, boxShadow } from '../styles/styles';

const PlusButton = ({propStyles, onPress}) => {
  return (
    <TouchableOpacity onPress={() => {onPress?onPress():null}} style={{...styles.plusBtn, ...propStyles}}>
      <Text style={{fontSize: 40, color: darkBlue}}>+</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  plusBtn: {
    borderRadius: 100,
    width: 60,
    height: 60,
    padding: 4,
    backgroundColor: blue,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    // bottom: -44,
    ...boxShadow
  }
})

export default PlusButton;
