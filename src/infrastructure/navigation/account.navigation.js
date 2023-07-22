import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { AccountScreen } from '../../fearutres/account/screens/account.screen';
import { LoginScreen } from '../../fearutres/account/screens/loginscreen';
import { RegisterScreen } from '../../fearutres/account/screens/registerscreen';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
