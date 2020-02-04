import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Context as HomeContext } from '../context/HomeContext';
import { blue, lightBlue, brand, boxShadow } from '../styles/styles';
import styled from 'styled-components';
import InputStyled from './InputStyled';
import Header from './Header'
import IncrementInput from './IncrementInput';

const FormContainer = styled.View`
  flex: 1;
  justifyContent: center;
`;

const StepTitleStyled = styled.View`
  margin: 12px 0;
  align-self: center;
`;

const InputBox = styled.View`
  align-self: center;
  width: 300px;
`;

const StepIndicatorContainer = styled.View`
  flex-direction: row;
  align-self: center;
  margin: 40px 0;
`;

const FormFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StepIndicator = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background-color: ${props => props.active?blue:'lightgrey'};
  margin: 8px;
`;

const StepButtonStyled = styled.TouchableOpacity`
  padding: 10px 14px;
  background-color: ${lightBlue};
  align-self: center;
  align-items: center;
  border-radius: 16px;
  min-width: 78px;
  margin: 14px 8px;
  opacity: ${({disabled}) => disabled?0:1};
  shadow-color: grey;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 5.84px;
  elevation: 15;
`;

const StepButton = ({title, disabled, onPress}) => {
  return (
    <StepButtonStyled disabled={disabled} onPress={() => {onPress()}}><Text style={{fontSize: 16}}>{title}</Text></StepButtonStyled>
  )
}

const StepTitle = ({step, title}) => {
  return (
    <StepTitleStyled><Text style={{fontSize: 16}}>Step {step}: {title}</Text></StepTitleStyled>
  )
}

const CreateHomeForm = ({navigation}) => {
  const { state, addHome } = useContext(HomeContext);
  const [step, setStep] = useState(1)
  const [home, setHome] = useState({
    title: '',
    address: '',
    image: '',
    typical_rent: ''
  })
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [sqft, setSqft] = useState(0);

  return (
    <>
      <FormContainer>
      <Header propStyle={{alignSelf:'center'}} title={"Create a Home"}/>
        <StepOne step={step} setStep={setStep} home={home} setHome={setHome} />
        <StepTwo step={step} setStep={setStep} home={home} setHome={setHome} />
        <StepThree step={step} setStep={setStep} bedrooms={bedrooms} bathrooms={bathrooms} sqft={sqft} setBedrooms={setBedrooms} setBathrooms={setBathrooms} setSqft={setSqft} />
      </FormContainer>
      <FormFooter>
        <StepButton onPress={() => {setStep(step - 1)}} disabled={step===1} title={"Prev"}/>
        <StepIndicatorContainer>
          <StepIndicator active={step===1} />
          <StepIndicator active={step===2} />
          <StepIndicator active={step===3} />
        </StepIndicatorContainer>
        {step===3?
          <StepButton
            onPress={() => {
              const homeIds = state.homes.map(home => home.id);
              const newId = Math.max(...homeIds) + 1;
              addHome({id: newId, title: home.title, address: home.address, typical_rent: home.typical_rent, bedrooms: bedrooms, bathrooms: bathrooms, sqft: sqft})
            }}
            title={"Submit"}
          />
          :
          <StepButton onPress={() => {setStep(step + 1)}} title={"Next"} />
        }

      </FormFooter>
    </>

  )

}

const StepOne = ({step, setStep, home, setHome}) => {
  return (
    <>
    {
      step === 1?
      <>
        <StepTitle title={"Name & Locate Home"} step={step} />
        <InputBox>
          <InputStyled
            value={home.title}
            placeholder="Nickname"
            onChangeText={(e) => {setHome({...home, title: e})}}
          />
        </InputBox>
        <InputBox>
          <InputStyled
            value={home.address}
            placeholder="Address"
            onChangeText={(e) => {setHome({...home, address: e})}}
          />
        </InputBox>
      </>
      : <></>
    }
    </>
  )
}

const StepTwo = ({step, setStep, home, setHome}) => {
  return (
    <>
    {
      step === 2?
      <>
        <StepTitle title={"Set Rent"} step={step} />
        <InputBox>
          <InputStyled
            value={home.typical_rent}
            placeholder="Rent Amount"
            onChangeText={(e) => {setHome({...home, typical_rent: e})}}
            keyboardType={"numeric"}
            returnKeyType={'done'}
          />
        </InputBox>
      </>
      : <></>
    }
    </>
  )
}

const StepThree = ({step, setStep, home, setHome, bedrooms, setBedrooms, bathrooms, setBathrooms, sqft, setSqft}) => {
  return (
    <>
    {
      step === 3?
      <>
        <StepTitle title={"Home Details"} step={step} />
        <InputBox>
          <View style={{marginTop: 16}} />
          <Text style={{color: 'grey', alignSelf: 'center'}}>Bedrooms:</Text>
          <IncrementInput increment={1} quantity={bedrooms} setQuantity={setBedrooms} />
          <Text style={{color: 'grey', alignSelf: 'center'}}>Bathrooms:</Text>
          <IncrementInput increment={1} quantity={bathrooms} setQuantity={setBathrooms} />
          <Text style={{color: 'grey', alignSelf: 'center'}}>Square Feet:</Text>
          <IncrementInput increment={100} quantity={sqft} setQuantity={setSqft} />
        </InputBox>
      </>
      : <></>
    }
    </>
  )
}


export default CreateHomeForm;
