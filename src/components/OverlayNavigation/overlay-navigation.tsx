import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {CatSvg, MessageSvg, UserSvg} from '../../assets/svg';
import styles from './overlay-navigation.styles';

const OverlayNavigation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('home');
        }}>
        <CatSvg width={20} height={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('messages');
        }}>
        <MessageSvg width={20} height={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('profile')}>
        <UserSvg width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

export default OverlayNavigation;
