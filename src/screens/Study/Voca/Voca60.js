import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text, StyleSheet,TouchableHighlight, ScrollView, Alert } from 'react-native';
import { color } from '../../../contans/color';

const Voca60 = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View>
      <Text style={{ color: color.active_color, fontSize: 20, padding: 8, fontWeight: '500' }}>
           Chọn bài học và chức năng
        </Text>
      </View>
      <Dropdown
        style={[styles.dropdown, { borderColor: color.active_color }]}
        placeholderStyle={{fontSize: 17, color: isFocus?color.active_color: 'white'}}
        selectedTextStyle={{fontSize: 17, color: isFocus?color.active_color: 'white'}}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="title"
        valueField="id"
        placeholder={!isFocus ? 'Chọn bài' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.id)
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
          style={{marginRight: 5}}
            color={isFocus?color.active_color: 'white'}
            name="swap"
            size={24}
          />
        )}
      />
      {vocaData.map((item,index)=> <View style={styles.container} key={index}>
          <TouchableHighlight style={styles.item} onPress={() => {
            if(value){
              navigation.navigate(item.navigate, {lesson: value, title: data.find(d=> d.id==value).title})
            } else {Alert.alert(
              'Úi!',
              'Bạn phải chon bài đã chứ!',
              [
                {text: 'Yes', onPress: () => console.log('Yes button clicked')},
              ],
              { 
                cancelable: true 
              }
            )}
          }}>
              <View style={styles.item_child}>
                <Text style={{width: 50, textAlign: 'center'}}><AntDesign name="star" size={35} color={color.info} /></Text>
                <Text style={{justifyContent: 'center', alignSelf: 'center',fontSize: 25, color: color.active_color}}>{item.label}</Text>
              </View>
          </TouchableHighlight>
      </View>)}
    </ScrollView>
  );
};

export default Voca60;

const data = [
  {
    "id": 3,
    "title": "📝 Bài 3: 교실 한국어",
  },
  {
    "id": 4,
    "title": "📝 Bài 4: 안녕하세요",
  },
  {
    "id": 5,
    "title": "📝 Bài 5: 주말 잘 보내세요",
  },
  {
    "id": 6,
    "title": "📝 Bài 6: 저는 투안입니다",
  },
  {
    "id": 7,
    "title": "📝 Bài 7: 여기가 사무실이에요",
  },
  {
    "id": 8,
    "title": "📝 Bài 8: 12시 30분에 점심을 먹어요",
  },
  {
    "id": 9,
    "title": "📝 Bài 9: 가족이 몇 명이에요?",
  },
  {
    "id": 10,
    "title": "📝 Bài 10: 어제 도서관에서 한국어를 공부했어요",
  },
  {
    "id": 11,
    "title": "📝 Bài 11: 사과 다섯 개 주세요",
  },
  {
    "id": 12,
    "title": "📝 Bài 12: 병원 옆에 약국이 있어요",
  },
  {
    "id": 13,
    "title": "📝 Bài 13: 시청 앞에서 일곱 시에 만나요",
  },
  {
    "id": 14,
    "title": "📝 Bài 14: 저는 비빔밥을 먹을래요",
  },
  {
    "id": 15,
    "title": "📝 Bài 15: 날씨가 맑아서 기분이 좋아요",
  },
  {
    "id": 16,
    "title": "📝 Bài 16: 시간이 있을때 주로 테니스 치러 가요",
  },
  {
    "id": 17,
    "title": "📝 Bài 17: 휴가때 제주도에 다녀올 거예요",
  },
  {
    "id": 18,
    "title": "📝 Bài 18: 버스나 지하철을 타고 가요",
  },
  {
    "id": 19,
    "title": "📝 Bài 19: 거기 한국가구지요?",
  },
  {
    "id": 20,
    "title": "📝 Bài 20: 저는 설거지를 할게요",
  },
  {
    "id": 21,
    "title": "📝 Bài 21: 상 차리는 것을 도와줄까요?",
  },
  {
    "id": 22,
    "title": "📝 Bài 22: 무단 횡단을 하면 안돼요",
  },
  {
    "id": 23,
    "title": "📝 Bài 23: 어른께는 두 손으로 물건을 드려야 해요",
  },
  {
    "id": 24,
    "title": "📝 Bài 24: 한국 영화를 보면서 공부해요",
  },
  {
    "id": 25,
    "title": "📝 Bài 25: 일요일마다 교회에 가요",
  },
  {
    "id": 26,
    "title": "📝 Bài 26: 밥을 먹은 후에 이 약을 드세요",
  },
  {
    "id": 27,
    "title": "📝 Bài 27: 어디가 아프십니까?",
  },
  {
    "id": 28,
    "title": "📝 Bài 28: 통장을 만들려고 왔어요",
  },
  {
    "id": 29,
    "title": "📝 Bài 29: 필리핀으로 엽서를 보내고 싶은데요",
  },
  {
    "id": 30,
    "title": "📝 Bài 30: 거기에서 태권도를 배울 수 있어요?",
  },
  {
    "id": 31,
    "title": "📝 Bài 31: 우리 고향은 서울보다 공기가 맑아요",
  },
  {
    "id": 32,
    "title": "📝 Bài 32: 복날에는 삼계탕을 먹어요",
  },
  {
    "id": 33,
    "title": "📝 Bài 33: 송편을 만드는 체험도 할 수 있어요",
  },
  {
    "id": 34,
    "title": "📝 Bài 34: 아기 옷을 선물하는 게 어때요?",
  },
  {
    "id": 35,
    "title": "📝 Bài 35: 한국 드라마가 재미있잖아요",
  },
  {
    "id": 36,
    "title": "📝 Bài 36: 단정한 모습이 좋아 보여요",
  },
  {
    "id": 37,
    "title": "📝 Bài 37: 출입문을 꼭 닫읍시다",
  },
  {
    "id": 38,
    "title": "📝 Bài 38: 입할 맛이 나요",
  },
  {
    "id": 39,
    "title": "📝 Bài 39: 오늘 회식을 하자고 해요",
  },
  {
    "id": 40,
    "title": "📝 Bài 40: 불쾌감을 느꼈다면 거건 성희롱아에요",
  },
  {
    "id": 41,
    "title": "📝 Bài 41: 드라이버로 해 보세요",
  },
  {
    "id": 42,
    "title": "📝 Bài 42: 이 기계 어떻게 작동하는지 알아요?",
  },
  {
    "id": 43,
    "title": "📝 Bài 43: 철근을 옮겨 놓으세요",
  },
  {
    "id": 44,
    "title": "📝 Bài 44: 페인트 작업을 했거든요",
  },
  {
    "id": 45,
    "title": "📝 Bài 45: 호미를 챙겼는데요",
  },
  {
    "id": 46,
    "title": "📝 Bài 46: 더 신경 쓰도록 하자",
  },
  {
    "id": 47,
    "title": "📝 Bài 47: 재고를 파악하는 것이 중요해요",
  },
  {
    "id": 48,
    "title": "📝 Bài 48: 다치지 않도록 조심하세요",
  },
  {
    "id": 49,
    "title": "📝 Bài 49: 안전화를 안 신으면 다칠 수 있어요",
  },
  {
    "id": 50,
    "title": "📝 Bài 50: 열심히 해 준 덕분이에요",
  },
  {
    "id": 51,
    "title": "📝 Bài 51: 한국에 가서 일을 하고 싶은데요",
  },
  {
    "id": 52,
    "title": "📝 Bài 52: 근로 조건이 좋은 편이에요",
  },
  {
    "id": 53,
    "title": "📝 Bài 53: 외국인 등록을 하러 가요",
  },
  {
    "id": 54,
    "title": "📝 Bài 54: 보험금을 신청할려고요",
  },
  {
    "id": 55,
    "title": "📝 Bài 55: 급여 명세서를 확인해 보세요",
  },
  {
    "id": 56,
    "title": "📝 Bài 56: 이번 여름 휴가 계획은 세웠어?",
  },
  {
    "id": 57,
    "title": "📝 Bài 57: 사업장을 변경하고 싶은데",
  },
  {
    "id": 58,
    "title": "📝 Bài 58: 체류 기간을 연장한 후에 꼭 신고해야 해",
  },
  {
    "id": 59,
    "title": "📝 Bài 59: 산업 안전 1",
  }
]

const vocaData = [
  {id: 1, label: 'Từ vựng', navigate: 'Voca60Detailt'},
  {id: 2, label: 'trắc nghiệm', navigate: 'quiz'},
  {id: 3, label: 'học từ vựng qua thẻ', navigate: 'flashcard'},
  {id: 4, label: 'game nối từ', navigate: 'join'},
  {id: 5, label: 'Tải về', navigate: 'download'},
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll'
  },
  dropdown: {
    height: 60,
    margin: 5,
    backgroundColor: color.bg_main,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  item: {
    flex:1,
    borderColor: color.text_dark,
    justifyContent: 'center',
    borderWidth: 1,
    padding: 10,
    margin: 2,
    marginLeft: 5,
    marginRight: 5,
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
  },
  iconStyle: {
    width: 30,
    height: 30
  }
});