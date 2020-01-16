import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import Header from '../components/Header';
import Link from '../components/Link';
import { categoryData } from '../data/categoryData';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {categoryData.map((item) => {
        return (
          <View key={item.name} style={styles.box}>
            <ImageBackground source={{uri: item.img}} style={{width: '100%', height: '100%'}}>
              <Link routeName={'Test'} style={styles.box}>
                <Header style={styles.white} title={item.name} />
              </Link>
            </ImageBackground>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  white: {
    color: '#fff'
  }
});


export default HomeScreen;
