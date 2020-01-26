import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import Loading from '../components/Loading';

const SigninScreen = () => {
  const { state, signin, clearErrors } = useContext(AuthContext);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled' style={styles.bg}>
      <Loading loading={state.loading} />
      <AuthForm
        title={'Welcome Back.'}
        actionTitle={'Sign In'}
        redirectRoute={'Signup'}
        clearErrors={clearErrors}
        errors={state.errors}
        onSubmit={( {email, password} ) => {signin({email, password})}}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#1E90FF',
    flex: 1
  }
})

export default SigninScreen;
