import {takeLatest, call, put, all} from 'redux-saga/effects';

import {Alert} from 'react-native';

import {api} from '../../../services/api';

import {
  signInSuccess,
  signInFailure
} from './actions';


export function* signIn({payload}) {
  try {
    const {
      email, password
    } = payload;

    const response = yield call(api.post, 'metodo_de_login', {
      email, password
    });

    const {data} = response;

    api.defaults.headers.Authorization = ` Bearer ${data.token}`;

    yield put(signInSuccess(account, accessToken));
  } catch (err) {
    yield put(signInFailure(err.response.data));
    Alert.alert('Falha na autenticação', 'Usuário e/ou senha inválida');
  }
}

export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth.userStatus?.success;

  if (token) {
    api.defaults.headers.Authorization = ` Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
