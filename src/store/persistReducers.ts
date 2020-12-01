import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'brp_app',
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers,
  );
  return persistedReducer;
};
