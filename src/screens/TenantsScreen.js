import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BrandHeader from '../components/BrandHeader';
import { NavigationEvents } from 'react-navigation';
import { Context as TenantContext } from '../context/TenantContext';

const TenantsScreen = () => {
  const { getTenants, state } = useContext(TenantContext);
  return (
    <>
      <NavigationEvents onWillFocus={() => {getTenants()}} />
      <BrandHeader />
      <View style={styles.container}>
        {state.tenants.map(tenant => {
          return (
            <View key={tenant.dl_number}>
              <Text>{tenant.first_name}</Text>
            </View>
          )
        })}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  horizContainer: {
    height: 200
  }
})

export default TenantsScreen
