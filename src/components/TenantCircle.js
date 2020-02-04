import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { boxShadow } from '../styles/styles';

const TenantCircle = ({tenant}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{...boxShadow}}>
        <Image style={styles.image} source={{uri: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}/>
      </View>
      <View style={styles.textBox}>
        <Text style={{textAlign: 'center'}}>{tenant?`${tenant.first_name} ${tenant.last_name}`:"Andrew John-Jones"}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    width: 96,
    alignItems: 'center',
    margin: 12

  },
  image: {
    height: 96,
    width: 96,
    borderRadius: 96,
    ...boxShadow
  },
  textBox: {
    paddingHorizontal: 4,
    paddingVertical: 8
  }
})

export default TenantCircle;
