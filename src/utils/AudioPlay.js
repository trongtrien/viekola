import { useEffect, useState } from 'react';
import { TouchableHighlight } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { color } from '../contans/color';

export default function AudioPlay({audioUri}) {
  const [sounds, setSound] = useState();
  const [ended, setended] = useState(false);
  async function playSound() {
    const { sound, status} = await Audio.Sound.createAsync({uri: audioUri});
    setSound(sound);
    setended(true)
    await sound.playAsync()
    setend(status.durationMillis)
  }

  function setend(duration){
    if(duration>0){
      setTimeout(() => {
        setended(false)
      }, duration);
    }
  }
  useEffect(() => {
    return sounds
      ? () => {
          sounds.unloadAsync()
        }
      : undefined;
  }, [sounds]);
  return (
    <TouchableHighlight style={{padding: 2, paddingEnd: 5}} onPress={playSound}><AntDesign name={!ended?'play':'pausecircle'} size={28} color={ended?'red':color.info} /></TouchableHighlight>
  );
}