import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import Test from 'react-native-vector-icons/MaterialCommunityIcons';
import SecondPage from './SecondPage';
import Details from './Details';
import Login from './Login';
import FirstPage from './FirstPage';
const Tab = createBottomTabNavigator();

export default function Bot() {
  return (
         <Tab.Navigator  initialRouteName='FirstPage'>
 <Tab.Screen name="Home " component={FirstPage} options={{headerShown:false,tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />  ),}}  />

      <Tab.Screen name="Login" component={Login} options={{headerShown:false,tabBarIcon: ({ color }) => (
                            <Icon name="login" color={color} size={26} />
                        ),}} />
        
      <Tab.Screen name="Details" component={Details} options={{headerShown:false,tabBarIcon: ({ color }) => (
                            <Test name="account-details" color={color} size={30} />
                        ),}}  />
     
    </Tab.Navigator>
  )
}