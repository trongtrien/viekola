import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from "../../contans/color"; 
import HomeScreen from "../HomeScreen";
import CourseScreen from "../CourseScreen";

export default function StudyStackScreen() {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
          <HomeStack.Screen
            options={{
              title: 'Từ vựng Eps',
              headerStyle: { 
                backgroundColor: color.statusbar_bg
              },headerTintColor: '#fff'}}
              name="Home"
              component={HomeScreen} />
          <HomeStack.Screen
            options={{
              title: 'Khóa học',
              headerStyle: { backgroundColor: color.statusbar_bg, higth: 50},
              headerTintColor: '#fff'
              }}
              name="CourseScreens"
              component={CourseScreen} />
    </HomeStack.Navigator>
  );
}