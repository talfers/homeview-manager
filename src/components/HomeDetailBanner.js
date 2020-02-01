import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeDetailBanner = ({home}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: home.image}} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{home.title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  titleWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    backgroundColor: 'rgba(100,100,100,0.5)',
    padding: 12
  },
  title: {
    color: 'white',
    fontSize: 24
  }
});

export default HomeDetailBanner;
