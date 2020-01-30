import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { categoryData } from '../data/categoryData';
import BoxButton from '../components/BoxButton';
import BrandHeader from '../components/BrandHeader';
import { NavigationEvents } from 'react-navigation';
import { Context as HomeContext } from '../context/HomeContext';
import Loading from '../components/Loading';

const HomesScreen = () => {
  const { getHomes, state } = useContext(HomeContext);
  return (
    <>
      <Loading />
      <NavigationEvents onWillFocus={() => {getHomes()}} />
      <BrandHeader />
      <View style={styles.container}>
        {state.homes.map(home => {
          return (
            <View key={home.id}>
              <Text>{home.title}</Text>
            </View>
          )
        })}
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});


export default HomesScreen;
