import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import {useTranslation} from 'react-i18next';


const HomeScreen = ({navigation}) => {
  const { t } = useTranslation()
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>{t('Name')}</Text>
      <Pressable onPress={()=> navigation.navigate('StudyScreen')}>
      <Text>Let's Go</Text></Pressable>
    </View>
  )
}
export default HomeScreen