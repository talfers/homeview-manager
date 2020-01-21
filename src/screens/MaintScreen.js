import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import Label from '../components/Label';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import Button from '../components/Button';
import { Context as TenantContext } from '../context/TenantContext';


const RequestScreen = () => {
  const { getTenants } = useContext(TenantContext)
  const [request, setRequest] = useState({
    subject: '',
    body: ''
  });
  return (
    <View style={styles.bg}>
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <Header title={"Submit Request"} />
        <View style={styles.inputWrapper}>
          <Label label={'subject'}/>
            <TextInput
              style={styles.input}
              value={request.subject}
              onChangeText={(e) => {setRequest({...request, subject: e})}}
              label={'subject'}
              autoCapitalize="none"
              autoCorrect={false}
            />
        </View>
        <TextInput
          style={styles.textarea}
          multiline={true}
          numberOfLines={30}
          value={request.body}
          onChangeText={(e) => {setRequest({...request, body: e})}}
          label={'body'}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer>
          <Button title={"Submit"} btnColor={'dodgerblue'} onPress={() => getTenants()} />
        </Spacer>
    </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#f0f0f0',
    flex: 1
  },
  container: {
    marginHorizontal: 40,
    justifyContent: 'center',
    flex: 1
  },
  inputWrapper: {
    color: 'grey',
    marginHorizontal: 0,
    marginVertical: 8
  },
  input: {
    paddingLeft: 8,
    height: 50,
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'lightgrey'
  },
  textarea: {
    backgroundColor: 'white',
    paddingLeft: 8,
    height: 200,
    fontSize: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'lightgrey'
  }
})

export default RequestScreen;
