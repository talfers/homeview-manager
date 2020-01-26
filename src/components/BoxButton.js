import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Link from '../components/Link';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { boxShadow, blue } from '../styles/styles';

const BoxButton = ({name, image}) => {
  return (
    <Link routeName={name} style={styles.box}>
      <View key={name} >
        <MaterialCommunityIcons name={image} style={{alignSelf: 'center', color: blue}} size={40} />
        <Header title={name} />
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  box: {
    height: 140,
    marginVertical: 20,
    width: 280,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    ...boxShadow,
    backgroundColor: '#ffffff'
  }
})

export default BoxButton;
