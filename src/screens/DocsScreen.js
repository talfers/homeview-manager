import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const DocsScreen = () => {
  return (
    <View style={styles.bg}>
      <Text>Hello from DocsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#f0f0f0',
    flex: 1
  }
})

export default DocsScreen;
