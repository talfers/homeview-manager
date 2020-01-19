import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const RequestScreen = () => {
  return (
    <View style={styles.bg}>
      <Text>Hello from RequestScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#f0f0f0',
    flex: 1
  }
})

export default RequestScreen;
