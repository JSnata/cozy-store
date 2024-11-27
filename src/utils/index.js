import axios from 'axios';

const baseurl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
    baseURL: baseurl,
})