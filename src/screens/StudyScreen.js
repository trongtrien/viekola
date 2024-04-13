import React from 'react'
import { View, Text,TouchableHighlight, StyleSheet, Image, FlatList,RefreshControl, ImageBackground } from 'react-native'
import { color } from '../contans/color' 

const StudyItem = ({
  navigation
}) => {
  const items = ({item}) => (
    <View style={styles.item}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={item.imgUri}/>
            <TouchableHighlight onPress={() => navigation.navigate(item.navi, 5)}>
              <View style={{paddingLeft: 10}}>
                <Text style={styles.heading}>{item.label}</Text>
                <Text style={styles.textColor}>{item.title}</Text>
              </View>
            </TouchableHighlight>
        </View>
      </View>
  );
  // Reload screen
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={DATA}
        renderItem={items}
        keyExtractor={item => item.id}
      />
    </View>
  )
}


export default function StudyScreen({navigation}) {
  const bg_img = require("../../assets/home/bg_m.jpg")
  return (
      <ImageBackground source={bg_img} resizeMode="cover" style={{
        flex: 1,
        justifyContent: 'center'
      }}>
        <View style={{ flex: 1, backgroundColor: 'transparent'}}>
          <StudyItem navigation={navigation}/>
        </View>
      </ImageBackground>
  );
}

const DATA = [
  {
    id: 1,
    label: 'Từ vựng eps',
    navi: 'Voca',
    title: '60 bài, đồng nghĩa, trái nghĩa...',
    imgUri: require("../../assets/home/item1.png")
  },
  {
    id: 2,
    label: 'Luyện đề',
    navi: 'Exam',
    title: 'Các cấp từ zero đến hero',
    imgUri: require("../../assets/home/item2.png")
  },
  {
    id: 3,
    label: 'Ngữ pháp',
    navi: 'Grammar',
    title: 'giải thích, ví dụ đầy đủ',
    imgUri: require("../../assets/home/item3.png")
  },
  {
    id: 4,
    label: 'Hội thoại',
    navi: 'Conversation',
    title: 'Toàn bộ hội thoại 60 bài',
    imgUri: require("../../assets/home/item5.png")
  },
  {
    id: 5,
    label: 'Ebook tự học',
    navi: 'SelfStudy',
    title: 'Đa ngôn ngữ',
    imgUri: require("../../assets/home/item4.png")
  },
  {
    id: 6,
    label: 'Thông tin EPS',
    navi: 'Info',
    title: 'Giới thiệu, giải đáp chi tiết',
    imgUri: require("../../assets/home/item6.png")
  }
];


const styles = StyleSheet.create({
    container: {
        paddingTop: 6,
        backgroundColor: 'transparent'
    },
    item: {
      backgroundColor: color.btn_bg,
      padding: 15,
      marginVertical: 6,
      marginHorizontal: 12,
      borderRadius: 10
    },
    textColor: {
        display: 'flex',
        fontSize: 15,
        paddingLeft: 5,
        textAlign: 'left',
        color: color.text_light
    },
    heading: {
      fontSize: 30,
      textShadowColor: '#f00999',
      color: color.active_color
    },
    btn: {
      fontSize: 20,
      backgroundColor: color.btn_bg,
    }
  });