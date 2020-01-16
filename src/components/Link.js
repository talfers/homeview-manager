import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const Link = ({children, navigation, routeName, style}) => {
  return (
    <TouchableOpacity style={style} onPress={() => {navigation.navigate(routeName)}}>
      {children}
    </TouchableOpacity>
  )
}

export default withNavigation(Link);
