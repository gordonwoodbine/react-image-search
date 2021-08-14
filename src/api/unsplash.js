import axios from 'axios';
// const key = process.env.REACT_APP_KEY;

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  params: {
    client_id: process.env.REACT_APP_KEY,
    per_page: 30
  }
});