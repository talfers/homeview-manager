import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { categoryData } from '../data/categoryData';
import BoxButton from '../components/BoxButton';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {categoryData.map((item) => {
        return (
            <BoxButton key={item.name} item={item}/>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});


export default HomeScreen;
