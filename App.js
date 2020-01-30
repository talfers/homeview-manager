import React from 'react';
import HomesScreen from './src/screens/HomesScreen';
import SocialScreen from './src/screens/SocialScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import TenantsScreen from './src/screens/TenantsScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as HomeProvider } from './src/context/HomeContext';
import { Provider as TenantProvider } from './src/context/TenantContext';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { setNavigator } from './src/navigationRef';
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
    Homes: createStackNavigator({
      Homes: HomesScreen
    }),
    Tenants: TenantsScreen,
    Requests: SocialScreen,
    Settings: createStackNavigator({
      Settings: SettingsScreen
    })
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        if (routeName === 'Homes') {
          icon = focused ? {color: iconColor, iconName:'door-open'} : {color: 'grey', iconName:'door-closed'};
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        }
        else if (routeName === 'Settings') {
          icon = focused ? {color: iconColor, iconName:'settings'} : {color: 'grey', iconName:'settings-outline'};
        }
        else if (routeName === 'Requests') {
          icon = focused ? {color: iconColor, iconName:'send'} : {color: 'grey', iconName:'send'};
        }
        else if (routeName === 'Tenants') {
          icon = focused ? {color: iconColor, iconName:'home-account'} : {color: 'grey', iconName:'home-account'};
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


HomesScreen.navigationOptions = {
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

SettingsScreen.navigationOptions = {
  headerShown: false
}

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <HomeProvider>
        <TenantProvider>
          <App ref={(navigator) => setNavigator(navigator)}/>
        </TenantProvider>
      </HomeProvider>
    </AuthProvider>
  )
}
