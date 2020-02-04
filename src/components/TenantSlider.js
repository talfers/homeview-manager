import React, { useContext } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { lightBlue, darkBlue, blue, lightGreen, boxShadow } from '../styles/styles';
import TenantCircle from './TenantCircle';
import { Context as TenantContext } from '../context/TenantContext';


const TenantSlider = ({home, navigation}) => {
  const { state } = useContext(TenantContext);
  let tenantIds = [];
  if(home.contracts && home.contracts.length>0) {
    home.contracts.forEach(contract => {
      tenantIds.push(contract.tenant.id);
    })
  }
  const homeTenants = state.tenants.filter(tenant => tenantIds.includes(tenant._id))
  return (
    <View style={styles.container}>
    <Text style={{fontSize: 20}}>Tenants:</Text>
    {
      homeTenants.length === 0?
      <View style={{marginTop: 24, alignSelf: 'center'}}><Text style={{color: 'grey'}}>No Current Tenants</Text></View>
      :
      <ScrollView horizontal={true}>
        {homeTenants.map(tenant => {
          <TenantCircle tenant={tenant}/>
        })}
      </ScrollView>
    }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    margin: 16,
  },
  noExpenses: {
    paddingTop: 20,
  }

});

export default TenantSlider;
