import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Pressable } from 'react-native'
import { color } from "../../contans/color"; 
import HomeScreen from "../HomeScreen";

export default function StudyStackScreen() {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
          <HomeStack.Screen
            options={{
              title: 'Epstopikvn',
              headerRight: () => (
            <Pressable
              onPress={() => alert('This is a button!')} >
            <MaterialCommunityIcons name="account" color={color.text_light} size={35}/>
            </Pressable>
          ),
              headerStyle: {
                backgroundColor: color.statusbar_bg
              },headerTintColor: color.text_light}}
              name="Home"
              component={HomeScreen} />
    </HomeStack.Navigator>
  );
}