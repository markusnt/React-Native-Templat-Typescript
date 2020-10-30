import {all} from 'redux-saga/effects';
import auth from './auth/sagas';
import user from './user/sagas';
import account from './account/sagas';
import bank from './bank/sagas';
import dda from './dda/sagas';
import consultCancell from './consultCancell/sagas';
import payments from './payments/sagas';
import animation from './animation/sagas';
import extract from './extract/sagas';
import validatePassword from './validatePassword/sagas';
import log from './log/sagas';
import favored from './favored/sagas';
import utils from './utils/sagas';

import pix from './pix/sagas';

export default function* rootSaga() {
  return yield all([
    account,
    auth,
    user,
    bank,
    dda,
    consultCancell,
    payments,
    animation,
    extract,
    validatePassword,
    log,
    favored,
    utils,
    pix,
  ]);
}
