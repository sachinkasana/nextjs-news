import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/',
  params: {
    'api-key': 'PhQ8HWTtP0qmjxn7IKRRWvG73o3MU7Pb',
  },
});


export default api;
