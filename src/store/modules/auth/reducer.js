/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  userStatus: {success: null, error: null},
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.userStatus = {success: action.payload.data.response, error: null};
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.userStatus = {success: null, error: action.payload.data.response};
        break;
      }

      default:
    }
  });
}
