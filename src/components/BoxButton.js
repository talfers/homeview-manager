import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const BoxButton = () => {
  return (
    <View style={styles.box}>
      <Image />
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    flex: 1
  }
})

export default SigninScreen;
