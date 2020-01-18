import React, { useContext } from 'react';
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native';

const TestScreen = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => {}} style={styles.button}>

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 300,
    width: 300,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default TestScreen;
