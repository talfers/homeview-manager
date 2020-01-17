import React from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';

const SigninScreen = () => {
  return (
    <View behavior="padding" enabled style={styles.bg}>
      <AuthForm title={'Sign Up'} onSubmit={() => {}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#1E90FF',
    flex: 1
  }
})

export default SigninScreen;
