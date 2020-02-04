import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const Input = styled.TextInput`
  margin: 12px;
  height: 50px;
  font-size: 20px;
  color: black;
  padding-left: 10px;
  background-color: white;
  border-color: lightgrey;
  border-radius: 16px;
  shadow-color: grey;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 5.84px;
  elevation: 15;
`;

const InputStyled = ({value, keyboardType, onChangeText, returnKeyType, placeholder}) => {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChangeText={(e) => {onChangeText(e)}}
      keyboardType={keyboardType?keyboardType:'default'}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType={returnKeyType}
    />
  )
}

export default InputStyled;
