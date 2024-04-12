import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from "../contans/color"; 
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

export default function StudyStackScreen() {
  const HomeStack = createNativeStackNavigator();
  const VocaStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
          <HomeStack.Screen options={{title: 'Từ vựng Eps',headerStyle: { backgroundColor: color.statusbar_bg},headerTintColor: '#fff'}} name="VocaView" component={HomeScreen} />
          <VocaStack.Screen options={{title: 'Settings',headerStyle: { backgroundColor: color.statusbar_bg},headerTintColor: '#fff'}} name="VocaViews" component={SettingsScreen} />
    </HomeStack.Navigator>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home! 545</Text>
      <TouchableHighlight onPress={()=> navigation.navigate('VocaViews')}>
      <Text>Go</Text>
      </TouchableHighlight>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}