import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
import { color } from '../../contans/color';
import 'intl-pluralrules';
import '../../i18n/i18n.config'

const data = [
  { label: 'Tiếng Việt', value: 'vi' },
  { label: 'English', value: 'en' },
  { label: '한국어', value: 'kr' }
];

const ChangeLang = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const {t, i18n} = useTranslation()

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, { color: color.active_color }]}>
           {t('Change language')}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, { borderColor: color.active_color }]}
        placeholderStyle={{fontSize: 16}}
        selectedTextStyle={{fontSize: 16, color: isFocus?color.active_color: 'black'}}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value)
          i18n.changeLanguage(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? color.active_color : 'black'}
            name="swap"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default ChangeLang;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 5,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  iconStyle: {
    width: 30,
    height: 30,
  }
});