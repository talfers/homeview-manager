import React, { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import Loading from '../components/Loading';

const SignupScreen = () => {
  const { state, signup, clearErrors } = useContext(AuthContext);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled' style={styles.bg}>
      <Loading loading={state.loading} />
      <AuthForm
        title={'Homeview'}
        actionTitle={'Sign Up'}
        redirectRoute={'Signin'}
        clearErrors={clearErrors}
        errors={state.errors}
        onSubmit={( { email, password, password2 } ) => {signup( { email, password, password2 } )}}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#1E90FF',
    flex: 1
  }
})

export default SignupScreen;
