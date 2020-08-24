import OMDB from '../omdb';

require('dotenv').config({ path: './../../.env' });

const apiKey = process.env.BASE_API_KEY || 'd5fc45b';

const searchByTitle = async (title, cb) => OMDB.get(`?apiKey=${apiKey}&s=${title}`)
  .then((resp) => cb(resp)).catch((error) => cb(error));

const MovieManager = { searchByTitle };

export default MovieManager;
