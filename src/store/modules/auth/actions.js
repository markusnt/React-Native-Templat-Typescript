export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {email, password},
  };
}
export function signInSuccess(response) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {response},
  };
}
export function signInFailure(response) {
  return {
    type: '@auth/SIGN_IN_FAILURE',
    payload: {response},
  };
}
