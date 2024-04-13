import { View, Text,TouchableHighlight, StyleSheet, RefreshControl, SafeAreaView, ScrollView, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from '../contans/color';

const HomeScreen = ({
  navigation
}) => {
  // Reload screen
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const image = require("../../assets/home/bg_home.jpg")
  return (
    <ImageBackground source={image} resizeMode="cover" style={{
        flex: 1,
        justifyContent: 'center'
      }}>
    <SafeAreaView style={styles.container} >
    <StatusBar hidden
          />
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={styles.item}>
        <View style={{position: 'absolute', bottom: 0, backgroundColor: 'rgba(100, 0, 0, 0.1)', borderRadius: 10, padding: 10}}>
              <View>
              <Text style={styles.heading}>EPSTOPIKVN</Text>
              <Text style={{fontSize: 22, color: color.text_dark}}>
                  <Text style={{padding: 0, margin: 0}}>
                    <MaterialCommunityIcons name='brush' color='#038' size={30} />
                  </Text> Chuyên tiếng Hàn EPS
              </Text>
              <Text style={styles.textColor}>
              <MaterialCommunityIcons name='check-decagram' color='#169610' size={30} /> Đầy đủ thông tin</Text>
              <Text style={styles.textColor}>
                <MaterialCommunityIcons name='check-decagram' color='#169610' size={30} /> Kiến thức tập trung</Text>
              <Text style={styles.textColor}>
                <MaterialCommunityIcons name='check-decagram' color='#169610' size={30} /> Hướng dẫn tận tình</Text>
              <Text style={styles.textColor}>
                <MaterialCommunityIcons name='check-decagram' color='#169610' size={30} /> Học phí là sự chăm chỉ của bạn</Text>
              <TouchableHighlight style={{padding: 5}} onPress={()=> navigation.navigate('Study')}>
                <Text style={styles.btn}>Let's Go</Text>
              </TouchableHighlight>
              </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        right: 0,
        bottom: 10,
        left: 0,
    },
    item: {
      height: 500,
      flex: 1,
      alignItems: 'center',
      bottom: 0,
      padding: 10
    },
    textColor: {
        display: 'flex',
        fontSize: 15,
        paddingLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        color: color.text_dark
    },
    heading: {
      alignItems: 'center',
      alignSelf: 'center',
      fontSize: 38,
      color: color.active_color,
    },
    btn: {
      fontSize: 20,
      backgroundColor: color.btn_bg,
      padding: 5,
      borderRadius: 30,
      marginTop: 10,
      width: '100%',
      textAlign: 'center',
      color: color.text_light
    }
  });