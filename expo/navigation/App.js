import * as React from 'react';
import { View, Text ,AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './Login';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import Details from './Details';
import Hometown from './Hometown';
import CurrentCity from './CurrentCity';
import Education from './Education';
import Password from './Password';
import Changepassword from './Changepassword';
import Bot from './Bot';
import Flat from './Flat';
import Sahad from './Sahad';
const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Bot" component={Bot} />
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Hometown" component={Hometown} />
        <Stack.Screen name="CurrentCity" component={CurrentCity} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Changepassword" component={Changepassword} />
        <Stack.Screen name="Flat" component={Flat} />
        <Stack.Screen name="Sahad" component={Sahad} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;