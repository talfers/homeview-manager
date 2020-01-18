import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ItemsScreen from './src/screens/ItemsScreen';
import TestContextScreen from './src/screens/TestContextScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './src/navigationRef';


const navigator = createStackNavigator({
    Home: HomeScreen,
    Items: ItemsScreen,
    Signin: SigninScreen,
    Signup: SignupScreen
}, {
  initialRouteName: 'Signin',
  defaultNavigationOptions: {
    title: 'App'
  }
})

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const App = createAppContainer(navigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)}/>
    </AuthProvider>
  )
}
