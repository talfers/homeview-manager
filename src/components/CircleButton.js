import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { lightBlue, darkBlue, blue, boxShadow } from '../styles/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PlusButton = ({propStyles, onPress, icon}) => {
  return (
    <TouchableOpacity onPress={() => {onPress?onPress():null}} style={{...styles.plusBtn, ...propStyles}}>
      <MaterialCommunityIcons size={36} name={icon} />
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

    // bottom: -44,
    ...boxShadow
  }
})

export default PlusButton;
