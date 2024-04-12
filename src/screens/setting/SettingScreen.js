import React from 'react';
import {Text, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import ChangeLang from './ChangLanguage';

const SettingScreen = () => {
  const users = [
    {
       name: 'brynn',
       avatar: 'https://epstopikvn.com/media/img/voc/tonghop/yte.png'
    },
    {
      name: 'trien',
      avatar: 'https://epstopikvn.com/media/img/voc/tonghop/yte.png'
   },
   ]
  return (
    <View style={{flex: 1}}> 
      <ChangeLang/>
        {users.map((u, i) => {
            return (
              <ListItem topDivider key={i}>
                <Text>{u.name}</Text>
              </ListItem>
            );
          })
        }
    </View>
  );
};

export default SettingScreen;