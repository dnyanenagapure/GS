import axios from 'axios';

const API = axios.create({
  baseURL: 'urUrl',
  timeout: 1000,
});


export const fetchData = async () => {
  try {
    const response = await API.get('/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default API;
