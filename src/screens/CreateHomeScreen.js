import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BrandHeader from '../components/BrandHeader';
import CreateHomeForm from '../components/CreateHomeForm';
import { Context as HomeContext } from '../context/HomeContext';
import { lightBlue } from '../styles/styles';

const CreateHomeScreen = ({navigation}) => {
  const { getHomes, state } = useContext(HomeContext);
  return (
    <View style={styles.container}>
      <CreateHomeForm />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});


export default CreateHomeScreen;
