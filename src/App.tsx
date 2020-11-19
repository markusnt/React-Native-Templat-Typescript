import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

import './config/ReactotronConfig.js';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#d0d0d0" />
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
