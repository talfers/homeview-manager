import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Header from './Header';
import { bottomShadow, darkBlue } from '../styles/styles';


const InfoBanner = ({logo}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={{uri:'https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}>
        <View style={styles.titleWrapper}>
          <Header propStyle={{color: darkBlue}} title={"Home 1"} />
        </View>

      </ImageBackground>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...bottomShadow,
    zIndex: 99,
    marginBottom: 12
  },
  image: {
    height: 168,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  titleWrapper: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 0,
    minWidth: '50%'
  }
})

export default InfoBanner;
