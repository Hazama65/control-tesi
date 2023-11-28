
import axios from 'axios';

const controlApi = axios.create({
    baseURL: 'https://back-control-production.up.railway.app/api/v1/control'
});

controlApi.interceptors.request.use( config => {
    const token = localStorage.getItem('token');

    config.headers['Authorization'] = `Bearer ${token}`

    return config;
});

export default controlApi;

