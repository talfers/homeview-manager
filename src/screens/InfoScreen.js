import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import InfoBanner from '../components/InfoBanner';
import InfoCard from '../components/InfoCard';
import ListItem from '../components/ListItem';

const InfoScreen = () => {
  return (
    <>
      <InfoBanner />
      <ListItem main={['Maintenance Requests', 'Last status change: 2/12/2020']} secondary={['Pending', 'Status']} />
      <ListItem main={['Last Transaction', 'Last payment made: 2/1/2020']} secondary={['$892.50', 'On-Time']} />
      <ListItem main={['Next Payment Due', 'Due on: 3/2/2020']} secondary={['$825.00', 'Total']} />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.horizContainer}>
        <InfoCard title={"General"} iconName={'home'} infoList={['2 bedroom', '1 Bathroom', '1200 sqft']} />
        <InfoCard title={"Location"} iconName={'map-marker-radius'} infoList={['437 N Woodard Street', 'Unit 4B', 'Littleton, CO 80123']} />
        <InfoCard title={"Amenities"} iconName={'bed-empty'} infoList={['2 bedroom', '1 Bathroom', '1200 sqft']} />
        <InfoCard title={"Photos"} iconName={'camera'}infoList={['2 bedroom', '1 Bathroom', '1200 sqft']}  />
      </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({
  horizContainer: {
    height: 200
  }
})

export default InfoScreen
