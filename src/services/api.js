import axios from 'axios';

const api = axios.create({
  baseURL: 'https://meudevocional.herokuapp.com',
});

export {api};
