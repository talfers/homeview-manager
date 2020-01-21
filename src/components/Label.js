import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { capitalize } from '../functions'

const Label = ({ label }) => {
  return (
    <Text style={styles.label}>{capitalize(label)}: </Text>

  )
}

const styles = StyleSheet.create({
  label: {
    color: 'grey',
    marginBottom: 4,
    fontSize: 12
  }
})

export default Label;
