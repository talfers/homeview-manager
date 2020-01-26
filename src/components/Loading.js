import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Loading = ({loading}) => {
  return (
    <>
      {
        loading ?
          <View style={styles.loadingWrapper}>
            <Text style={styles.loading}>
              Loading...
            </Text>
          </View> :
          <></>
      }

    </>
  )
}

const styles = StyleSheet.create({
  loadingWrapper: {
    zIndex: 98,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center'

  },
  loading: {
    fontSize: 24
  }
})

export default Loading;
