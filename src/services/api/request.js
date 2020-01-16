const headers = new Headers({ 'Content-Type': 'application/json' });

const handleErrors = (response) => {
  if (!response.ok) {
    return response.json().then((data) => {
      const { error = {} } = data;

      throw error;
    });
  }

  return response.json().then((data) => data);
};


const setBaseUrl = (url) => `/${url}`;


class Request {
  static get(url = '') {
    return fetch(setBaseUrl(url), {
      method: 'GET',
      credentials: 'include',
    }).then(handleErrors);
  }

  static post({ url, params = {} }) {
    return fetch(setBaseUrl(url), {
      headers,
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(params.data),
    }).then(handleErrors);
  }

  static postFormData(url, { params } = {}) {
    return fetch(url, {
      headers,
      method: 'POST',
      credentials: 'include',
      body: params.data,
    }).then(handleErrors);
  }

  static put(url, { params } = {}) {
    return fetch(url, {
      headers,
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(params.data),
    }).then(handleErrors);
  }

  static delete(url) {
    return fetch(url, {
      method: 'DELETE',
      credentials: 'include',
    }).then(handleErrors);
  }
}

export default Request;
