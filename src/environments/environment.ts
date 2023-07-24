import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3050'
});

export default http;