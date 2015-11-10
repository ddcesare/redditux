import { fetchToJson } from '../lib/http.js';

export function logIn() {
  return dispatch => {
    fetchToJson('http://localhost:5000/api/users/2')
      .then(data =>  dispatch(logingIn(data)));
  }
}

function logingIn(user) {
  return {
    type: 'LOGINING_IN',
    user,
    loading: true,
    data: Date.now()
  }
}
