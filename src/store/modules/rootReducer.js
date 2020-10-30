import {combineReducers} from 'redux';
import account from './account/reducer';
import auth from './auth/reducer';
import bank from './bank/reducer';
import consultCancell from './consultCancell/reducer';
import dda from './dda/reducer';
import payments from './payments/reducers';
import user from './user/reducer';
import animation from './animation/reducer';
import validatePassword from './validatePassword/reducers';
import autoRefresh from './autoRefresh/reducer';
import extract from './extract/reducer';
import log from './log/reducer';
import favored from './favored/reducer';
import utils from './utils/reducers';

import pix from './pix/reducers';

export default combineReducers({
  account,
  auth,
  user,
  bank,
  dda,
  consultCancell,
  payments,
  animation,
  validatePassword,
  autoRefresh,
  extract,
  log,
  favored,
  utils,
  pix,
});
