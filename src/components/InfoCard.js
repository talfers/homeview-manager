import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { boxShadow } from '../styles/styles';

const InfoCard = ({title, iconName, infoList, routeName, navigation}) => {
  const infoListRendered = infoList? infoList.map(piece => (
    <Text key={piece}>{piece}</Text>
  )) : ""
  return (
    <TouchableOpacity onPress={() => {routeName?navigation.navigate(routeName):()=>{}}} style={styles.container}>
      <View style={styles.header}><MaterialCommunityIcons name={iconName} size={30}/><Text style={styles.title}>{title}</Text></View>
      <View style={styles.desc}>
        {infoListRendered}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    height: 136,
    marginHorizontal: 16,
    marginVertical: 24,
    padding: 16,
    borderRadius: 10,
    width: 200,
    ...boxShadow,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    marginLeft: 6,
    fontSize: 18
  },
  desc: {

  }
})

export default InfoCard;
