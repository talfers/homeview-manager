import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, routeName, title }) => {
  return (
    <TouchableOpacity style={styles.link} onPress={() => navigation.navigate(routeName)}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    alignSelf: 'center'
  }
})

export default withNavigation(NavLink);
