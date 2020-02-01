import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { lightBlue, darkBlue, blue, lightGreen, boxShadow } from '../styles/styles';
import AddCard from './AddCard';

const ExpensesSlider = ({home, navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={{fontSize: 20}}>Expenses:</Text>
    {
      home.expenses.length === 0?
      <AddCard
        title={"Expense"}
        bgColor={lightGreen}
        color={"#f5f5f5"}
        iconName={"cash-usd"}
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
  noExpenses: {
    paddingTop: 20,
  },
  box: {
    height: 148,
    justifyContent: 'space-between',
    width: 136,
    padding: 24,
    borderRadius: 16,
    backgroundColor: lightGreen,
    ...boxShadow
  }

});

export default ExpensesSlider;
