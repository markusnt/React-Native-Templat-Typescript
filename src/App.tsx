import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import Routes from './routes';

import { store } from './store';

import './config/Reactotron';

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#d0d0d0" />
      <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
        <Routes />
      </View>
    </NavigationContainer>
  </Provider>
);

export default App;
