import axios from 'axios';

require('dotenv').config({ path: './../../.env' });

const baseURL = process.env.BASE_API_URL || 'http://www.omdbapi.com';

const OMDB = axios.create({
  baseURL,
});

export default OMDB;
