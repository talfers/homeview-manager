import React, { useContext } from 'react';
import { View, Text, Image ,StyleSheet } from 'react-native';
import Header from './Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { lightBlue, bottomShadow } from '../styles/styles';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';

const AccountHeader = ({user, tenant, image, balance, duration_remaining}) => {
  const { state, checkProfile } = useContext(AuthContext);
  return (
    <>
      <NavigationEvents onWillFocus={() => {checkProfile(user.email)}} />
      <View style={styles.container}>
        {image?<Image style={styles.image} />:<MaterialCommunityIcons size={80} style={{color: 'grey'}} name={'account-circle'}/>}
        <Header title={tenant?tenant.first_name + " " + tenant.last_name:"User Profile"} />
        <Text style={styles.info} >Balance: {balance?balance:''}</Text>
        <Text style={styles.info} >Lease Remaining: {duration_remaining}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: lightBlue,
    ...bottomShadow,
    marginBottom: 12
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: 'grey'
  },
  info: {
    margin: 6,
    fontSize: 16
  }
})

export default AccountHeader;
