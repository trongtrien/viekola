import React from 'react';
import { View, Text, FlatList, StyleSheet,TouchableHighlight } from 'react-native';
import { color } from '../../../contans/color';
import { AntDesign, Octicons, MaterialCommunityIcons,MaterialIcons,Entypo } from '@expo/vector-icons';

const VocaScreen = ({navigation}) => {
    const Items = ({item}) => (
        <View style={styles.container}>
            <TouchableHighlight style={styles.item} onPress={() => navigation.navigate(item.navigate, 9)}>
                <View style={styles.item_child}>
                  <Text style={{width: 50, textAlign: 'center'}}>{item.icon}</Text>
                  <Text style={{justifyContent: 'center', alignSelf: 'center',fontSize: 25, color: color.active_color}}>{item.label}</Text>
                </View>
            </TouchableHighlight>
        </View>
      );

  return (
    <View style={{padding: 5}}>
        <FlatList
        data={vocaData}
        renderItem={({ item }) => (
            <Items item={item}/>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default VocaScreen;
const vocaData = [
  {id: 1, icon: <AntDesign name="star" size={35} color={color.info} />, label: 'Từ vựng 60 bài', navigate: 'Voca60'},
  {id: 2, icon: <AntDesign name="doubleright" size={35} color={color.info} />, label: 'Đồng nghĩa', navigate: 'dongnghia'},
  {id: 3, icon: <AntDesign name="swap" size={35} color={color.info} />, label: 'Trái nghĩa', navigate: 'trainghia'},
  {id: 4, icon: <Entypo name="add-to-list" size={35} color={color.info} />, label: 'Phó từ', navigate: 'photu'},
  {id: 5, icon: <Octicons name="number" size={35} color={color.info} />, label: 'Số đếm - đơn vị', navigate: 'sodem'},
  {id: 6, icon: <AntDesign name="barschart" size={35} color={color.info} />, label: 'Từ vựng biểu đồ', navigate: 'tuvungbieudo'},
  {id: 7, icon: <MaterialCommunityIcons name="connection" size={35} color={color.info} />, label: 'Từ nối - từ để hỏi', navigate: 'tunoi-tudehoi'},
  {id: 8, icon: <MaterialIcons name="color-lens" size={35} color={color.info} />, label: 'Màu sắc', navigate: 'mausac'}
]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    flex:1,
    borderColor: color.text_dark,
    justifyContent: 'center',
    borderWidth: 1,
    padding: 10,
    margin: 1,
    borderRadius: 5,
    backgroundColor: color.bg_main
  },
  item_child: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  heading: {
    fontSize: 20,
    paddingBottom: 5
  }
})