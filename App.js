import React from 'react';
import { Image } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import PayScreen from './src/screens/PayScreen';
import MaintScreen from './src/screens/MaintScreen';
import DocsScreen from './src/screens/DocsScreen';
import AccountScreen from './src/screens/AccountScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import TestContextScreen from './src/screens/TestContextScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { setNavigator } from './src/navigationRef';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

let iconColor = 'dodgerblue'
const switchNavigator = createSwitchNavigator({
  userFlow: createBottomTabNavigator({
    Home: createStackNavigator({
      Home: HomeScreen,
      Pay: PayScreen,
      Maint: MaintScreen,
      Docs: DocsScreen
    }),
    Account: AccountScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        if (routeName === 'Home') {
          icon = focused ? {color: iconColor, iconName:'door-open'} : {color: 'grey', iconName:'door-closed'};
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'Account') {
          icon = focused ? {color: iconColor, iconName:'account-circle'} : {color: 'grey', iconName:'account-circle-outline'};
        }

        // You can return any component that you like here!
        return <MaterialCommunityIcons name={icon.iconName} style={{color: icon.color}} size={24} />
      },
    }),
    tabBarOptions: {
      activeTintColor: iconColor,
      inactiveTintColor: 'gray',
    },
  }),
  authFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  Loading: LoadingScreen
  // userFlow: createBottomTabNavigator({
  //   Home: HomeScreen,
  //   Items: ItemsScreen
  // })
});


HomeScreen.navigationOptions = {
  headerShown: false
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)}/>
    </AuthProvider>
  )
}
