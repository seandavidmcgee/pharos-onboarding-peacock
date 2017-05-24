import fetch from 'isomorphic-fetch';

export const API_TEST_URL = 'https://9y4g9leoic.execute-api.us-west-2.amazonaws.com/Beta';

export default function deleteTestApi(endpoint, method = 'delete', headers, body) {
  return fetch(`${API_TEST_URL}/${endpoint}`, {
    headers: { 'content-type': 'application/json', 'user': headers.user, 'customer': headers.customer },
    method,
    body: JSON.stringify(body),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  })
  .then(
    response => response,
    error => error
  );
}
