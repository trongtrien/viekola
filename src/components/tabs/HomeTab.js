import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from '../../contans/color'
import HomeScreen from '../../screens/Stack/HomeStack';
import StudyScreen from '../../screens/StudyScreen';
import DocScreen from '../../screens/DocScreen';
import CourseScreen from '../../screens/CourseScreen';
import StudyStackScreen from '../../screens/testScree';

const Tab = createBottomTabNavigator();
export default function HomeTab() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: '#123',
      tabBarStyle: {
        backgroundColor: color.bg_main
      }
    }}
  >
    <Tab.Screen
      name="Home t"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarLabelStyle: styles.tab,
        tabBarLabel: 'Home b',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#000"
            />
          )
      }}
    />
    <Tab.Screen
      name="StudyScreen"
      component={StudyScreen}
      options={{
        headerShown: false,
        tabBarLabelStyle: styles.tab,
        tabBarLabel: 'Học tập',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="lead-pencil" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="CourseScreen"
      component={CourseScreen}
      options={{
        headerShown: false,
        tabBarLabelStyle: styles.tab,
        tabBarLabel: 'Khóa học',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="book-open" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="DocScreen"
      component={DocScreen}
      options={{
        headerShown: false,
        tabBarLabelStyle: styles.tab,
        tabBarLabel: 'Tài liệu',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="file-document" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="InfoScreen"
      component={StudyStackScreen}
      options={{
        headerShown: false,
        tabBarLabelStyle: styles.tab,
        tabBarLabel: 'Thông tin',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="information" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tab: {
        position: 'absolute',
        bottom: 3
    }
})