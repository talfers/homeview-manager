import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const PayScreen = () => {
  return (
    <View style={styles.bg}>
      <Text>Hello from PayScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#f0f0f0',
    flex: 1
  }
})

export default PayScreen;
