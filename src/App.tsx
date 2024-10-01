import React, { Fragment } from 'react';
import { Alert } from 'react-native';
import Config from 'react-native-config';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OverlayNavigation from './components/OverlayNavigation/overlay-navigation';
import Home from './screens/home';
import Messages from './screens/messages';
import Profile from './screens/profile';

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {

  if (!Config.CATS_API_KEY) {
    Alert.alert('Error', 'CATS_API_KEY is not set, application will not work properly');
  }

  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="messages" component={Messages} />
          <Stack.Screen name="profile" component={Profile} />
        </Stack.Navigator>
        <OverlayNavigation />
      </NavigationContainer>
    </Fragment>
  );
};

export default App;
