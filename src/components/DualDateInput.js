import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { capitalize } from '../functions'

const DualDateInput = ({ labelRight, labelLeft, value, setValue, keyboard }) => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [startDateOpen, setStartDateOpen] = useState()
  const [endDateOpen, setEndDateOpen] = useState()
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.labelWrapper}>
        <View style={styles.leftLabel}>
          <TouchableOpacity onPress={() => {setStartDateOpen(!endDateOpen? !startDateOpen: null)}}>
            <Text style={styles.label}>{(!startDateOpen && !endDateOpen) || startDateOpen? capitalize(labelLeft) + ":": ""} </Text>
          </TouchableOpacity>
          <Text></Text>
        </View>
        <View style={styles.rightLabel}>
          <TouchableOpacity onPress={() => {setEndDateOpen(!startDateOpen? !endDateOpen: null)}}>
            <Text style={styles.label}>{(!startDateOpen && !endDateOpen) || endDateOpen? capitalize(labelRight) + ":": ""} </Text>
          </TouchableOpacity>
          <Text></Text>
        </View>
      </View>
      {
        startDateOpen && !endDateOpen?
          <DateTimePicker
            value={startDate}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={(e) => {}}
          />
        :
          <></>
      }
      {
        endDateOpen && !startDateOpen?
          <DateTimePicker
            value={endDate}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={(e) => {}}
          />
        :
          <></>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  labelWrapper: {
    flexDirection: 'row',
    marginVertical: 12
  },
  leftLabel: {
    flex: 1
  },
  rightLabel: {
    flex: 1
  },

  label: {
    color: 'dodgerblue',
    marginBottom: 4,
    fontSize: 16
  },
  inputWrapper: {
    color: 'grey',
    marginHorizontal: 0,
    marginVertical: 8
  },
  input: {
    paddingLeft: 8,
    height: 50,
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'lightgrey'
  }
})

export default DualDateInput;
