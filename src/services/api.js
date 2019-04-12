import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-bck.herokuapp.com',
});

export default api;