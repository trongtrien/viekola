import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native'
import HomeTab from './src/components/tabs/HomeTab';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StatusBar hidden/>
      <HomeTab />
    </NavigationContainer>
  );
}