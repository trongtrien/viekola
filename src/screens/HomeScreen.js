import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Pressable onPress={()=> navigation.navigate('StudyScreen')}>
      <Text>Let's Go</Text></Pressable>
    </View>
  )
}
export default HomeScreen