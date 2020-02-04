import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { lightBlue, darkBlue, blue, boxShadow } from '../styles/styles';
import CircleButton from './CircleButton';

const ContractSlider = ({home, navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={{fontSize: 20}}>Contracts:</Text>
    {
      home.contracts.length === 0?
      <View style={styles.noContract}>
        <View style={styles.box}>
          <MaterialCommunityIcons size={60} color={"lightgrey"} name={"file-document-box-multiple"} />
          <Text style={{color: 'grey', textAlign: 'center', fontSize: 16}}>No Current Contracts</Text>
          <CircleButton icon={'plus'} propStyles={{bottom: -44, position: 'absolute'}} />
        </View>
      </View>
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
    marginBottom: 36
  },
  noContract: {
    paddingTop: 20,
    alignItems: 'center'
  },
  box: {
    padding: 30,
    borderRadius: 16,
    borderColor: 'lightgrey',
    borderStyle: 'dashed',
    borderWidth: 1.5,
    alignItems: 'center'
  },
  plusBtn: {
    borderRadius: 100,
    width: 60,
    height: 60,
    padding: 4,
    backgroundColor: blue,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -44,
    ...boxShadow
  }

});

export default ContractSlider;
