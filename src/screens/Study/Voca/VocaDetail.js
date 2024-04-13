import React, { useState, useEffect } from 'react';
import AxiosInstance from '../../../components/apiUrl/AxiosInstance'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { color } from '../../../contans/color';

const Voca = ({route}) => {
    const item = route.params
    const [vocaData, setVocaData] = useState([])

    const Items = ({item, index}) => (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text>{index}. {item.question}</Text>
            </View>
            <View style={styles.item}>
                <Text>{item.answer}</Text>
            </View>
        </View>
      );

    useEffect(()=> {
      AxiosInstance({method: 'GET', url: `/vocabulary/${item}`})
      .then(res=> setVocaData(res.data))
      .catch(err=> console.log(err))
    },[])

  return (
    <View style={{flex: 1, padding: 5}}>
        <Text style={styles.heading}>Bai 10</Text>
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    width: '50%', // is 50% of container width
    borderColor: color.text_dark,
    borderWidth: 1,
    padding: 5
  },
  heading: {
    fontSize: 20,
    paddingBottom: 5
  }
})