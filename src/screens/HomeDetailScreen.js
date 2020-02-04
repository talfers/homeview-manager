import React, { useContext } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import HomeDetailBanner from '../components/HomeDetailBanner';
import ContractSlider from '../components/ContractSlider';
import ExpensesSlider from '../components/ExpensesSlider';
import TenantSlider from '../components/TenantSlider';
import NotesSlider from '../components/NotesSlider';
import { Context as HomeContext } from '../context/HomeContext';
import TenantCircle from '../components/TenantCircle';

const HomeDetailScreen = ({navigation}) => {
  const { state }  = useContext(HomeContext);
  const id = navigation.getParam('id');
  const foundHome = state.homes.filter(home => home.id === id)[0]
  return (
    <ScrollView>
      <HomeDetailBanner home={foundHome} />
      <ContractSlider home={foundHome} />
      <TenantSlider home={foundHome} />
      <ExpensesSlider home={foundHome}/>
      <NotesSlider home={foundHome}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({});

HomeDetailScreen.navigationOptions = {
  title: 'Home Info'
}

export default HomeDetailScreen;
