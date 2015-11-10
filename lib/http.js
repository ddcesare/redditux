import fetch from 'isomorphic-fetch';

export function fetchToJson(api) {
  return fetch(api).then(res => {
        return res.json()
      });
}