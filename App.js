import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ItemsScreen from './src/screens/ItemsScreen';
import TestContextScreen from './src/screens/TestContextScreen';
import SigninScreen from './src/screens/SigninScreen';
import { Provider as MessageProvider } from './src/context/MessageContext';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const navigator = createStackNavigator({
    Home: HomeScreen,
    Items: ItemsScreen,
    Signin: SigninScreen
}, {
  initialRouteName: 'Home',
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
    <MessageProvider>
      <App/>
    </MessageProvider>
  )
}
