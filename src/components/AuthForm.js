import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Spacer from './Spacer';
import Header from './Header';
import Button from './Button';
import NavLink from './NavLink';

const AuthForm = ({ title, actionTitle, redirectRoute, onSubmit, errors, clearErrors }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
    <Header title={title?title:''} propStyle={{color: 'white', alignSelf: 'center'}}/>
      <View style={styles.inputWrapper}>
      <Text style={styles.label}>Email: </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(e) => {setEmail(e)}}
          label="Email"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Password: </Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(e) => {setPassword(e)}}
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      {actionTitle === 'Sign Up'?
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Confirm Password: </Text>
          <TextInput
            style={styles.input}
            value={password2}
            onChangeText={(e) => {setPassword2(e)}}
            label="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View> :
        <></>
      }
      <View style={styles.errors}>
        {errors? errors.map(error => (
          <Text key={error} style={{color: 'red'}}>{error}</Text>
        )): <></>}
      </View>
      <Spacer>
        <Button onPress={() => {
          clearErrors();
          onSubmit( { email, password, password2 } )
        }} title={actionTitle} />
      </Spacer>
      <Spacer>
        <NavLink
          title={actionTitle === 'Sign Up'?
             "Already have an account? Sign In"  :  "Dont have an account? Sign Up" }
          routeName={redirectRoute}
        />
      </Spacer>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    justifyContent: 'center',
    flex: 1
  },
  label: {
    color: 'white',
    marginBottom: 8,
    fontSize: 16
  },
  inputWrapper: {
    color: 'white',
    margin: 12
  },
  input: {
    height: 50,
    fontSize: 20,
    color: 'white',
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  errors: {
    margin: 12,
    color: 'red'
  }
})

export default AuthForm;
