import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Link from '../components/Link';
import AccountHeader from '../components/AccountHeader';
import ActionBar from '../components/ActionBar';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <AccountHeader />
      <ActionBar title={"Edit Profile"} />
      <ActionBar title={"Maintenance Requests"}/>
      <ActionBar title={"Transaction History"} />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default AccountScreen;
