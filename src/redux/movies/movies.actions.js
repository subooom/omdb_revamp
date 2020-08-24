import { SEARCH_BY_TITLE, FETCH_BY_ID } from './movies.types';

  export const searchByTitle = (title) => {

    return {
      type: SEARCH_BY_TITLE,
      title: title,
    };

  };

export const fetchById = (id) => {

  return {
    type: FETCH_BY_ID,
    id: id,
  };

};