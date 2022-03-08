import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:21465',
});

export {
    api
}