import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import AxiosInstance from '../../../components/apiUrl/AxiosInstance'
import { FontAwesome } from '@expo/vector-icons';
import { color } from '../../../contans/color';
import AudioPlay from '../../../utils/AudioPlay';

const Voca = ({route}) => {
    const params = route.params
    const [vocaData, setVocaData] = useState([])
    const [showKo, setShowKo] = useState(true)
    const [showVie, setShowVie] = useState(true)
    const [showVieById, setShowVieById] = useState(false)
    const [VieById, setVieById] = useState(0)
    function showVieByIdHandle(showVieById, index, id){
        if(showVieById){
            if(index==id){
                return true
            } else {
                return false
            }
        }
    }
    const Items = ({item, index}) => (
        <View style={styles.container}>
            <View style={styles.item}>
                <View style={{flex: 1}}>
                {showKo?<Text style={{padding: 3, fontSize: 18}}>{index}. {item.question}</Text>:
                <Text style={{padding: 3, fontSize: 18}}>{index}. {showVieByIdHandle(showVieById, VieById, index)&&item.question}</Text>}
                </View>
                <TouchableHighlight><AudioPlay audioUri={`https://vie-ko-api.dev/vieko/audio/voc/u${params.lesson}/${index}.mp3`}/></TouchableHighlight>
            </View>
            <View style={styles.item}>
                {showVie?<View style={{flex: 1}}><Text style={{padding: 4, fontSize: 18}}>{item.answer}</Text></View>:
                <View style={styles.itemsub}>
                    {showVieById&&<View style={{flex: 1}}>
                      <Text style={{padding: 4, fontSize: 18}}>{showVieByIdHandle(showVieById, VieById, index)&&item.answer}</Text>
                    </View>}
                    <TouchableHighlight onPressIn={()=> {
                      setVieById(index)
                      setShowVieById(!showVieById)
                    }}>
                      <FontAwesome  style={{padding: 2, paddingEnd: 5}} name={showVieByIdHandle(showVieById, VieById, index)?"eye":"eye-slash"} size={24} color={showVie?color.active_color:"black"} />
                    </TouchableHighlight>
                </View>}
            </View>
        </View>
      );
    useEffect(()=> {
      AxiosInstance({method: 'GET', url: `/vocabulary/${params.lesson}`})
      .then(res=> setVocaData(res.data))
      .catch(err=> console.log(err))
    },[])
  return (
    <View style={{flex: 1, padding: 5}}>
        <Text style={styles.heading}>{params.title}</Text>
        <View style={styles.container}>
            <View style={[styles.item, {borderTopWidth: 1}]}>
                <View style={{flex: 1}}>
                  <Text style={{padding: 3, fontSize: 18, color: color.primary, fontWeight: '700'}}>한국어</Text>
                </View>
                <TouchableHighlight onPressIn={()=> setShowKo(!showKo)}>
                  <FontAwesome  style={{padding: 2, paddingEnd: 5}} name={showKo?"eye":"eye-slash"} size={24} color={showKo?color.active_color:"black"} />
                </TouchableHighlight>
            </View>
            <View style={[styles.item, {borderTopWidth: 1}]}>
                <View style={{flex: 1}}>
                    <Text style={{padding: 4, fontSize: 18, color: color.primary, fontWeight: '500'}}>Tiếng Việt</Text>
                </View>
                <TouchableHighlight onPressIn={()=> setShowVie(!showVie)}>
                  <FontAwesome  style={{padding: 2, paddingEnd: 5}} name={showVie?"eye":"eye-slash"} size={24} color={showVie?color.active_color:"black"} />
                </TouchableHighlight>
            </View>
        </View>
        <FlatList
        data={vocaData}
        renderItem={({ item, index }) => (
            <Items item={item} index={index+1}/>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Voca;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    width: '50%',
    height: "100%",
    borderColor: color.text_dark,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRadius: 2
  },
  itemsub: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  heading: {
    fontSize: 18,
    padding: 5,
    color: color.text_light,
    backgroundColor: color.bg_main,
    borderRadius: 5,
    marginBottom: 5
  }
})
