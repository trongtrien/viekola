import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeTab from './src/components/tabs/HomeTab';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <HomeTab />
    </NavigationContainer>
  );
}