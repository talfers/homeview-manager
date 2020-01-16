import React, { useContext } from 'react';
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native';
import { Context as MessageContext } from '../context/MessageContext';

const TestScreen = () => {
  const { state, sendMessage } = useContext(MessageContext);
  return (
    <View>
      <TouchableOpacity onPress={() => sendMessage('taylor', 'whats up my dude')} style={styles.button}>
        {state.messages.map(message => {
          return (
            <Text >{message.message}</Text>
          )
        })}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 300,
    width: 300,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default TestScreen;
