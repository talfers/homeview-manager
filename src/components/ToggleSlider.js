import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { boxShadow } from '../styles/styles';

const ToggleSlider = ({selectionNames, state}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{...styles.selection, ...styles.leftSelect}} onPress={() => {}}>
        <Text>{selectionNames?selectionNames[0]:"Left"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.selection} onPress={() => {}}>
        <Text>{selectionNames?selectionNames[1]:"Mid"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.selection, ...styles.rightSelect}} onPress={() => {}}>
        <Text>{selectionNames?selectionNames[2]:"Right"}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 40,
    borderRadius: 16,
    flexDirection: 'row',
    ...boxShadow
  },
  selection: {
    height: '100%',
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center'

  },
  leftSelect: {
    borderRightWidth: 1,
    borderColor: 'grey',
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16
  },
  rightSelect: {
    borderLeftWidth: 1,
    borderColor: 'grey',
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16
  }
})

export default ToggleSlider;
