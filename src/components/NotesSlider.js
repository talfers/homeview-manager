import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { lightBlue, darkBlue, blue, lightGreen, boxShadow } from '../styles/styles';
import AddCard from './AddCard';

const NotesSlider = ({home, navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={{fontSize: 20}}>Notes:</Text>
    {
      home.expenses.length === 0?
      <AddCard
        title={"Note"}
        bgColor={blue}
        color={"#f5f5f5"}
        iconName={"note-plus-outline"}
      />
      :
      <View>

      </View>
    }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    margin: 16,
  },
  noNotes: {
    paddingTop: 20,
  },
  box: {
    height: 148,
    justifyContent: 'space-between',
    width: 136,
    padding: 24,
    borderRadius: 16,
    backgroundColor: blue,
    ...boxShadow
  }

});

export default NotesSlider;
