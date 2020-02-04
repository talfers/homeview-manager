import React, { useState, useContext } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import BrandHeader from '../components/BrandHeader';
import { NavigationEvents } from 'react-navigation';
import { Context as TenantContext } from '../context/TenantContext';
import Loading from '../components/Loading';
import TenantCard from '../components/TenantCard';
import { lightBlue, darkBlue } from '../styles/styles';

const TenantsScreen = () => {
  const { getTenants, state } = useContext(TenantContext);
  const [selection, setSelection] = useState('prospect')
  let selectedTenants = state.tenants.filter(tenant => tenant.status === selection)
  return (
    <>
      <NavigationEvents onWillFocus={() => {getTenants()}} />
      <Loading loading={state.loading}/>
      <BrandHeader />
      <View>
        <View style={styles.toggleContainer}>
          <TouchableOpacity style={[styles.selection, styles.leftSelect, selection==='prospect'?styles.active:null]} onPress={() => {setSelection('prospect')}}>
            <Text>Prospective</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.selection, selection==='current'?styles.active:null]} onPress={() => {setSelection('current')}}>
            <Text>Current</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.selection, styles.rightSelect, selection==='previous'?styles.active:null]} onPress={() => {setSelection('previous')}}>
            <Text>Previous</Text>
          </TouchableOpacity>
        </View>
        <ScrollView >
          {selectedTenants.map(tenant => {
            return (
              <View key={tenant.dl_number}>
                <TenantCard tenant={tenant}/>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  horizContainer: {
    height: 200
  },
  toggleContainer: {
    width: 260,
    height: 40,
    borderRadius: 16,
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 20,
  },
  selection: {
    height: '100%',
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'lightgrey',
    borderWidth: 1

  },
  leftSelect: {
    borderRightWidth: 1,
    borderColor: 'lightgrey',
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16
  },
  rightSelect: {
    borderLeftWidth: 1,
    borderColor: 'lightgrey',
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16
  },
  active: {
    backgroundColor: lightBlue
  }
})

export default TenantsScreen
