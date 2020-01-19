import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Link from '../components/Link';

const BoxButton = ({item}) => {
  return (
    <View key={item.name} style={styles.box}>
      <Link routeName={item.name} style={''}>
        <Header title={item.name} />
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    height: 180,
    width: 180,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: .01,
    shadowColor: 'lightgrey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 2,
    shadowRadius: 10,
  }
})

export default BoxButton;
