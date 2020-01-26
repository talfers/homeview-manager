import React from 'react';
import { Image } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import PayScreen from './src/screens/PayScreen';
import MaintScreen from './src/screens/MaintScreen';
import DocsScreen from './src/screens/DocsScreen';
import SocialScreen from './src/screens/SocialScreen';
import AccountScreen from './src/screens/AccountScreen';
import InfoScreen from './src/screens/InfoScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import TestContextScreen from './src/screens/TestContextScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as TenantProvider } from './src/context/TenantContext';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { setNavigator } from './src/navigationRef';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setCustomText } from 'react-native-global-props';
import { darkBlue } from './src/styles/styles';

const customTextProps = {
  style: {
    fontFamily: 'Futura-Medium'
  }
}

setCustomText(customTextProps);

let iconColor = 'dodgerblue'
const switchNavigator = createSwitchNavigator({
  authFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  userFlow: createBottomTabNavigator({
    Home: createStackNavigator({
      Home: HomeScreen,
      Pay: PayScreen,
      Maintenance: MaintScreen,
      Documents: DocsScreen
    }),
    Info: InfoScreen,
    Social: SocialScreen,
    Account: createStackNavigator({
      Account: AccountScreen,
      EditProfile: EditProfileScreen
    })
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
        }
        else if (routeName === 'Account') {
          icon = focused ? {color: iconColor, iconName:'account-circle'} : {color: 'grey', iconName:'account-circle-outline'};
        }
        else if (routeName === 'Social') {
          icon = focused ? {color: iconColor, iconName:'message-text'} : {color: 'grey', iconName:'message-outline'};
        }
        else if (routeName === 'Info') {
          icon = focused ? {color: iconColor, iconName:'information'} : {color: 'grey', iconName:'information-outline'};
        }

        // You can return any component that you like here!
        return <MaterialCommunityIcons name={icon.iconName} style={{color: icon.color}} size={24} />
      },
    }),
    tabBarOptions: {
      activeTintColor: iconColor,
      inactiveTintColor: 'gray',
    },


  })
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

AccountScreen.navigationOptions = {
  headerShown: false
}

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <TenantProvider>
        <App ref={(navigator) => setNavigator(navigator)}/>
      </TenantProvider>
    </AuthProvider>
  )
}
