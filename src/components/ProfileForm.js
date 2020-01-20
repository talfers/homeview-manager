import React, { useState } from 'react';
import { View,Text, TextInput, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Label from './Label';
import DualDateInput from './DualDateInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from './Button';
import Header from './Header';
import Spacer from './Spacer';

const ProfileForm = () => {
  const [formPage, setFormPage] = useState(1);
  const [profile, setProfile] = useState({
    name: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    start_date: '',
    end_date: '',
    why_left: '',
    ref_name: '',
    ref_phone: '',
    dl_number: '',
    dl_state: ''
  });
  return (
    <ScrollView>
    {
      formPage === 1?
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <Spacer>
          <Header title={"Previous Address"}/>
        </Spacer>
        <View style={styles.inputWrapper}>
          <Label label={"name"}/>
            <TextInput
              style={styles.input}
              value={profile.name}
              onChangeText={(e) => {setProfile({...profile, name: e})}}
              autoCapitalize="none"
              autoCorrect={false}
            />
        </View>
        <View style={styles.inputWrapper}>
          <Label label={"phone"} />
            <TextInput
              keyboardType={'phone-pad'}
              style={styles.input}
              value={profile.phone}
              onChangeText={(e) => {setProfile({...profile, phone: e})}}
              autoCapitalize="none"
              autoCorrect={false}
            />
        </View>
        <View style={styles.inputWrapper}>
          <Label label={"address 1"} />
            <TextInput
              style={styles.input}
              value={profile.address1}
              onChangeText={(e) => {setProfile({...profile, address1: e})}}
              autoCapitalize="none"
              autoCorrect={false}
            />
        </View>
        <View style={styles.inputWrapper}>
          <Label label={"address 2"} />
            <TextInput
              style={styles.input}
              value={profile.address2}
              onChangeText={(e) => {setProfile({...profile, address2: e})}}
              autoCapitalize="none"
              autoCorrect={false}
            />
        </View>
        <View style={styles.inputWrapper}>
          <Label label={"city"} />
            <TextInput
              style={styles.input}
              value={profile.city}
              onChangeText={(e) => {setProfile({...profile, city: e})}}
              label={'city'}
              autoCapitalize="none"
              autoCorrect={false}
            />
        </View>
        <View style={styles.inputWrapper}>
          <Label label={"state"} />
            <TextInput
              style={styles.input}
              value={profile.state}
              onChangeText={(e) => {setProfile({...profile, state: e})}}
              autoCapitalize="none"
              autoCorrect={false}
            />
        </View>
        <View style={styles.inputWrapper}>
          <Label label={"zipcode"} />
            <TextInput
              style={styles.input}
              value={profile.zipcode}
              onChangeText={(e) => {setProfile({...profile, zipcode: e})}}
              autoCapitalize="none"
              autoCorrect={false}
            />
        </View>
        <Spacer>
          <Button title={'Next'} btnColor={'dodgerblue'} onPress={() => setFormPage(2)} />
        </Spacer>

      </KeyboardAvoidingView> :
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <Header title={"Additional Info"}/>
        <DualDateInput labelLeft={'Start Date'} labelRight={'End Date'}/>
        <View style={styles.inputWrapper}>
          <Label label={"why did you leave?"} />
            <TextInput
              style={styles.input}
              value={profile.why_left}
              onChangeText={(e) => {setProfile({...profile, why_left: e})}}
              autoCapitalize="none"
              autoCorrect={false}
            />
        </View>
        <View style={styles.inputWrapper}>
          <Label label={"reference name"} />
            <TextInput
              style={styles.input}
              value={profile.ref_name}
              onChangeText={(e) => {setProfile({...profile, ref_name: e})}}
              autoCapitalize="none"
              autoCorrect={false}
            />
        </View>
        <View style={styles.inputWrapper}>
          <Label label={"reference phone"} />
            <TextInput
              keyboardType={'phone-pad'}
              style={styles.input}
              value={profile.ref_phone}
              onChangeText={(e) => {setProfile({...profile, ref_phone: e})}}
              autoCapitalize="none"
              autoCorrect={false}
            />
        </View>
        <View style={styles.inputWrapper}>
          <Label label={"drivers license #"} />
            <TextInput
              keyboardType={'numeric'}
              style={styles.input}
              value={profile.dl_number}
              onChangeText={(e) => {setProfile({...profile, dl_number: e})}}
              autoCapitalize="none"
              autoCorrect={false}
            />
        </View>
        <View style={styles.inputWrapper}>
          <Label label={"drivers license state"} />
            <TextInput
              style={styles.input}
              value={profile.dl_state}
              onChangeText={(e) => {setProfile({...profile, dl_state: e})}}
              autoCapitalize="none"
              autoCorrect={false}
            />
        </View>
        <Spacer>
          <Button title={'Prev'} btnColor={'dodgerblue'} onPress={() => setFormPage(1)} />
        </Spacer>

      </KeyboardAvoidingView>
    }
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    justifyContent: 'center',
    flex: 1
  },
  inputWrapper: {
    color: 'grey',
    marginHorizontal: 0,
    marginVertical: 4
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
});


export default ProfileForm;
