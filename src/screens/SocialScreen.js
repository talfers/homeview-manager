import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BoxButton from '../components/BoxButton';
import BrandHeader from '../components/BrandHeader';

const SocialScreen = () => {
  return (
    <>
      <BrandHeader />
      <View style={styles.container}>
        <BoxButton name={'Announcments'} image={'microphone-variant'} />
        <BoxButton name={'Chat'} image={'message-processing'}/>
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});


export default SocialScreen;
