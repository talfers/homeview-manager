import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signup, clearErrors } = useContext(AuthContext);
  return (
    <View behavior='padding' enabled style={styles.bg}>
      <AuthForm title={'Sign Up'} clearErrors={clearErrors} errors={state.errors} onSubmit={( { email, password, password2 } ) => {signup( { email, password, password2 } )}}/>
      <NavLink title={"Sign In"} routeName={'Signin'} />
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
