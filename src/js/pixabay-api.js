import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54994040-b8635b68b4c6f311854573060';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => res.data);
}
