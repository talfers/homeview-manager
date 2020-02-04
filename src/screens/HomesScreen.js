import React, { useContext } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { categoryData } from '../data/categoryData';
import BoxButton from '../components/BoxButton';
import BrandHeader from '../components/BrandHeader';
import { NavigationEvents } from 'react-navigation';
import { Context as HomeContext } from '../context/HomeContext';
import Loading from '../components/Loading';
import HomeItem from '../components/HomeItem';
import CircleButton from '../components/CircleButton';

const HomesScreen = ({navigation}) => {
  const { getHomes, state } = useContext(HomeContext);
  return (
    <>
      <Loading loading={state.loading} />
      <NavigationEvents onWillFocus={() => {getHomes()}} />
      <BrandHeader />
      <ScrollView style={styles.container}>
        {state.homes.map(home => {
          return (
            <HomeItem key={home.id} home={home} onPress={() => {navigation.navigate('HomeDetail', {id: home.id})}}/>
          )
        })}

      </ScrollView>
      <CircleButton icon={"plus"} onPress={() => navigation.navigate('CreateHome')} propStyles={{position: 'absolute', bottom: 10, right: 10}}/>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});


export default HomesScreen;
