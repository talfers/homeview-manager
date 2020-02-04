import React from 'react';
import { TouchableOpacity, TextInput, Text, View, StyleSheet } from 'react-native';
import { lightBlue, darkBlue, blue, boxShadow } from '../styles/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CircleButton from './CircleButton';
import styled from 'styled-components'

const IncrementContainer = styled.View`
  flex-direction: row;
  align-self: center;
`;

const IncrementDisplay = styled.TextInput`
  align-self: center;
  font-size: 20px;
  align-items: center;
  text-align: center;
  width: 60px;
`;

const IncrementButton = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin: 10px;
  background-color: white;
  shadow-color: grey;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 5.84px;
  elevation: 15;
  ${({disabled}) => disabled?`
    opacity: 0.4;
  `:null}
`;

const IncrementInput = ({quantity, setQuantity, increment}) => {
  return (
    <IncrementContainer>
      <IncrementButton disabled={quantity<=0} onPress={() => setQuantity(Number(quantity) - Number(increment))}><MaterialCommunityIcons size={20} name={"minus"} /></IncrementButton>
      <IncrementDisplay
        value={String(quantity)}
        onChangeText={(e) => {setQuantity(e)}}
      />
      <IncrementButton onPress={() => setQuantity(Number(quantity) + Number(increment))}><MaterialCommunityIcons size={20} name={"plus"} /></IncrementButton>
    </IncrementContainer>
  )
}

export default IncrementInput;
