import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54994040-b8635b68b4c6f311854573060';

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };
  const res = await axios.get(BASE_URL, { params });
  return res.data;
}
