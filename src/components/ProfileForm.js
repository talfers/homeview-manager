import React, { useState, useContext } from 'react';
import { View,Text, TextInput, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Label from './Label';
import DualDateInput from './DualDateInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from './Button';
import Header from './Header';
import Spacer from './Spacer';
import { Context as TenantContext } from '../context/TenantContext';
import { Context as AuthContext } from '../context/AuthContext';

const ProfileForm = () => {
  const { addTenant } = useContext(TenantContext);
  const { state } = useContext(AuthContext);
  const [formPage, setFormPage] = useState(1);
  let initialProfileState = state.tenantProfile?{
    first_name: state.tenantProfile.first_name,
    last_name: state.tenantProfile.last_name,
    phone: state.tenantProfile.phone,
    address1: state.tenantProfile.previous_address.address1,
    address2: state.tenantProfile.previous_address.address2,
    city: state.tenantProfile.previous_address.city,
    state: state.tenantProfile.previous_address.state,
    zipcode: state.tenantProfile.previous_address.zipcode,
    start_date: state.tenantProfile.previous_address.start_date,
    end_date: state.tenantProfile.previous_address.end_date,
    why_left: state.tenantProfile.previous_address.why_left,
    ref_name: state.tenantProfile.previous_address.ref_name,
    ref_phone: state.tenantProfile.previous_address.ref_phone,
    dl_number: state.tenantProfile.dl_number,
    dl_state: state.tenantProfile.dl_state
  }:{
    first_name: '',
    last_name: '',
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
  }
  const [profile, setProfile] = useState(initialProfileState);
  return (
    <ScrollView>
      <Step1 profileState={{ profile, setProfile }} formPageState={{ formPage, setFormPage }} />
      <Step2 profileState={{ profile, setProfile }} formPageState={{ formPage, setFormPage }} />
      <Step3 user={state.user} addTenant={(tenant) => {addTenant(tenant)}} profileState={{ profile, setProfile }} formPageState={{ formPage, setFormPage }} />
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

export const Step1 = ({formPageState, profileState}) => {
  if(formPageState.formPage !== 1) {
    return <></>
  }
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <Spacer>
        <Header title={"Personal Info"}/>
      </Spacer>
      <View style={styles.inputWrapper}>
        <Label label={"first name"}/>
          <TextInput
            style={styles.input}
            value={profileState.profile.first_name}
            onChangeText={(e) => {profileState.setProfile({...profileState.profile, first_name: e})}}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>
      <View style={styles.inputWrapper}>
        <Label label={"last name"}/>
          <TextInput
            style={styles.input}
            value={profileState.profile.last_name}
            onChangeText={(e) => {profileState.setProfile({...profileState.profile, last_name: e})}}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>
      <View style={styles.inputWrapper}>
        <Label label={"phone"} />
          <TextInput
            keyboardType={'phone-pad'}
            style={styles.input}
            value={profileState.profile.phone}
            onChangeText={(e) => {profileState.setProfile({...profileState.profile, phone: e})}}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>

      <Spacer>
        <Button title={'Next'} btnColor={'dodgerblue'} onPress={() => formPageState.setFormPage(2)} />
      </Spacer>

    </KeyboardAvoidingView>
  )
}

export const Step2 = ({formPageState, profileState}) => {
  if(formPageState.formPage !== 2) {
    return <></>
  }
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <Spacer>
        <Header title={"Previous Address"}/>
      </Spacer>
      <View style={styles.inputWrapper}>
        <Label label={"address 1"} />
          <TextInput
            style={styles.input}
            value={profileState.profile.address1}
            onChangeText={(e) => {profileState.setProfile({...profileState.profile, address1: e})}}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>
      <View style={styles.inputWrapper}>
        <Label label={"address 2"} />
          <TextInput
            style={styles.input}
            value={profileState.profile.address2}
            onChangeText={(e) => {profileState.setProfile({...profileState.profile, address2: e})}}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>
      <View style={styles.inputWrapper}>
        <Label label={"city"} />
          <TextInput
            style={styles.input}
            value={profileState.profile.city}
            onChangeText={(e) => {profileState.setProfile({...profileState.profile, city: e})}}
            label={'city'}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>
      <View style={styles.inputWrapper}>
        <Label label={"state"} />
          <TextInput
            style={styles.input}
            value={profileState.profile.state}
            onChangeText={(e) => {profileState.setProfile({...profileState.profile, state: e})}}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>
      <View style={styles.inputWrapper}>
        <Label label={"zipcode"} />
          <TextInput
            style={styles.input}
            value={profileState.profile.zipcode}
            onChangeText={(e) => {profileState.setProfile({...profileState.profile, zipcode: e})}}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>
      <Spacer>
        <Button title={'Prev'} btnColor={'dodgerblue'} onPress={() => formPageState.setFormPage(1)} />
      </Spacer>
      <Spacer>
         <Button title={'Next'} btnColor={'dodgerblue'} onPress={() => formPageState.setFormPage(3)} />
      </Spacer>


    </KeyboardAvoidingView>
  )
}

export const Step3 = ({formPageState, profileState, addTenant, user}) => {
  if(formPageState.formPage !==3 ) {
    return <></>
  }
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <Header title={"Additional Info"}/>
      <DualDateInput startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} labelLeft={'Start Date'} labelRight={'End Date'}/>
      <View style={styles.inputWrapper}>
        <Label label={"why did you leave?"} />
          <TextInput
            style={styles.input}
            value={profileState.profile.why_left}
            onChangeText={(e) => {profileState.setProfile({...profileState.profile, why_left: e})}}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>
      <View style={styles.inputWrapper}>
        <Label label={"reference name"} />
          <TextInput
            style={styles.input}
            value={profileState.profile.ref_name}
            onChangeText={(e) => {profileState.setProfile({...profileState.profile, ref_name: e})}}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>
      <View style={styles.inputWrapper}>
        <Label label={"reference phone"} />
          <TextInput
            keyboardType={'phone-pad'}
            style={styles.input}
            value={profileState.profile.ref_phone}
            onChangeText={(e) => {profileState.setProfile({...profileState.profile, ref_phone: e})}}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>
      <View style={styles.inputWrapper}>
        <Label label={"drivers license #"} />
          <TextInput
            keyboardType={'numeric'}
            style={styles.input}
            value={profileState.profile.dl_number}
            onChangeText={(e) => {profileState.setProfile({...profileState.profile, dl_number: e})}}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>
      <View style={styles.inputWrapper}>
        <Label label={"drivers license state"} />
          <TextInput
            style={styles.input}
            value={profileState.profile.dl_state}
            onChangeText={(e) => {profileState.setProfile({...profileState.profile, dl_state: e})}}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>
      <Spacer>
        <Button title={'Prev'} btnColor={'dodgerblue'} onPress={() => formPageState.setFormPage(2)} />
      </Spacer>
      <Spacer>
        <Button title={'Submit'} btnColor={'dodgerblue'} onPress={() => {
          const { first_name, last_name, address1, address2, city, state, zipcode, dl_number, dl_state, phone, ref_name, ref_phone, why_left } = profileState.profile
          addTenant({
            first_name,
            last_name,
            email: user.email,
            phone,
            address1,
            address2,
            city,
            state,
            zipcode,
            ref_name,
            ref_phone,
            start_date: startDate?startDate.getTime():null,
            end_date: endDate?endDate.getTime():null,
            why_left,
            dl_number,
            dl_state
          })

        }}
        />
      </Spacer>

    </KeyboardAvoidingView>
  )
}

export default ProfileForm;
