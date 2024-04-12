import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from "../contans/color"; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  FlatList,
} from 'react-native';
import i18next, {languageResources} from '../i18n/service/i18next';
import {useTranslation} from 'react-i18next';
import languagesList from '../i18n/service/languageList.json';

export default function StudyStackScreen() {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
          <HomeStack.Screen options={{
            headerShown: false,
            headerStyle: { backgroundColor: color.statusbar_bg},
            headerTintColor: '#fff'}} 
            name="Setting" 
            component={Setting} />
    </HomeStack.Navigator>
  );
}
const Setting = () => {
  const [visible, setVisible] = useState(false);
  const {t} = useTranslation();
  const changeLng = lng => {
    i18next.changeLanguage(lng);
    
  };
  const { i18n } = useTranslation('home');
  console.log(i18n.language)
  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={styles.languagesList}>
          <TouchableOpacity onPress={()=> setVisible(false)}>
            <MaterialCommunityIcons name='arrow-left-bold-box' color={color.info} size={30}/>
          </TouchableOpacity>
          <FlatList
            data={Object.keys(languageResources)}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.languageButton}
                onPress={() => changeLng(item)}>
                <Text style={{
                  fontSize: 16,
                  color: item==i18n.language?color.active_color:'white',
                }}>
                  {item==i18n.language?'🔸 ':''}
                  {languagesList[item].nativeName}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
      <Text style={styles.text}>{t('welcome')}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>{t('change-language')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.bg_main,
  },
  button: {
    backgroundColor: '#6258e8',
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    marginBottom: 100,
    fontSize: 18,
    color: 'white',
  },
  languagesList: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: color.bg_main,
  },
  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderRadius: 5
  },
  lngName: {
    fontSize: 16,
    color: 'white',
  },
});