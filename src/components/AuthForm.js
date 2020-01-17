import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Spacer from './Spacer';
import Header from './Header';
import Button from './Button';

const AuthForm = ({title, onSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
    <Header title={title?title:''}/>
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
      <Spacer>
        <Button onPress={() => {}} title={title} />
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
  }
})

export default AuthForm;
