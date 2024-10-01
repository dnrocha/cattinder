import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import SwiperComponent from '../components/Swiper/swiper';
import Toogle from '../components/Toogle/toogle';
import store from '../store';

const Home = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.sectionContainer}>
        <Provider store={store}>
          <Toogle />
          <SwiperComponent />
        </Provider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: '#FBFAFF',
  },
});

export default Home;
