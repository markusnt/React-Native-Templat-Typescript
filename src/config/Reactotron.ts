import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

declare global {
  interface Console {
    tron: any;
  }
}

interface PluginConfig {
  except?: string[];
}

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '10.7.2.105' })
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin({ except: [''] }))
    .connect();

  tron.clear!();

  console.tron = tron;
}
