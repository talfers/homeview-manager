import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import InfoBanner from '../components/InfoBanner';
import InfoCard from '../components/InfoCard';

const InfoScreen = () => {
  return (
    <>
      <InfoBanner />
      <View style={styles.twoGrid}>
        <InfoCard title={"General"} iconName={'view-list'} />
        <InfoCard title={"Location"} iconName={'bed-empty'} />
        <InfoCard title={"Amenities"} iconName={'bed-empty'} />
        <InfoCard title={"Photos"} iconName={'bed-empty'} />
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  twoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default InfoScreen
