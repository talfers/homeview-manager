import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Link from '../components/Link';
import Loading from '../components/Loading';
import AccountHeader from '../components/AccountHeader';
import ActionBar from '../components/ActionBar';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { state, checkProfile } = useContext(AuthContext);
  return (
      <View style={styles.container}>
        <AccountHeader tenant={state.tenantProfile} user={state.user} />
        <ActionBar data={state.tenantProfile} title={state.tenantProfile?"Edit Tenant Profile":"Create Tenant Profile"} routeName={'EditProfile'} />
        <ActionBar title={"View Contracts"}/>
        <ActionBar title={"Maintenance Requests"}/>
        <ActionBar title={"Transaction History"} />
      </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default AccountScreen;
