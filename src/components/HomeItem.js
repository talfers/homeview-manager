import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeItem = ({home, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <Image style={styles.image} source={{uri: home.image}} />
      <View style={styles.homeDetails}>
        <Text style={styles.title}>{home.title}</Text>
        <Text style={styles.rent}>${home.typical_rent}</Text>
        <Text style={styles.vacant}><MaterialCommunityIcons name={'circle'} style={home.isVacant?{color: 'red'}:{color: 'green'}} size={10}/> Occupied? {home.isVacant?'No':'Yes'}</Text>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1
  },
  image: {
    height: '100%',
    width: 148
  },
  homeDetails: {
    justifyContent: 'center',
    paddingLeft: 16
  },
  title: {
    fontSize: 20
  },
  rent: {
    color: 'grey'
  },
  vacant: {
    alignItems: 'center'
  }
})

export default HomeItem;
