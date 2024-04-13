import * as React from 'react';
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from '../../contans/color'
import HomeScreen from '../../screens/Stack/HomeStack';
import StudyScreen from '../../screens/Stack/StudyStack';
import DocScreen from '../../screens/DocScreen';
import CourseScreen from '../../screens/CourseScreen';
import Settings from '../../screens/SettingScreen';

export default function HomeTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#fff',
      tabBarLabelStyle: styles.icon,
      tabBarStyle: {
        backgroundColor: color.bg_main,
        height: 50
      }
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabelStyle: styles.tab,
        headerShown:false,
        tabBarLabel: 'Homes',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={20} style={styles.icon}/>
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
          <MaterialCommunityIcons name="lead-pencil" color={color} size={20} style={styles.icon}/>
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
          <MaterialCommunityIcons name="book-open" color={color} size={20} style={styles.icon}/>
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
          <MaterialCommunityIcons name="file-document" color={color} size={20} style={styles.icon}/>
        ),
      }}
    />
    <Tab.Screen
      name="InfoScreen"
      component={Settings}
      options={{
        headerShown: false,
        tabBarLabelStyle: styles.tab,
        tabBarLabel: 'Thông tin',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="information" color={color} size={20} style={styles.icon}/>
        ),
      }}
    />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tab: {
        position: 'absolute',
        bottom: 6
    },
    icon: {
      position: 'absolute',
      top: 6
  }
})