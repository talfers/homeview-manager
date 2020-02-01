import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { boxShadow } from '../styles/styles';

const AddCard = ({title, bgColor, color, iconName}) => {
  return (
    <View style={styles.noItems}>
      <TouchableOpacity style={{...styles.box, backgroundColor: bgColor}}>
        <MaterialCommunityIcons size={60} color={color} name={iconName} />
        <Text style={{color: color, fontSize: 14}}>Add {title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    margin: 16,
  },
  noItems: {
    paddingTop: 20,
  },
  box: {
    minHeight: 140,
    justifyContent: 'space-between',
    width: 120,
    padding: 24,
    borderRadius: 16,
    ...boxShadow
  }
})

export default AddCard;
