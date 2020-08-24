import {
  SEARCH_BY_TITLE,
  FETCH_BY_ID
} from './movies.types';

import MovieManager from './../../models/movie/manager';

const INITIAL_STATE = {
  movies: null,
};

const reducer = async (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case SEARCH_BY_TITLE:
      // make the request to the MovieManager for a search by title

      const movies = await MovieManager.searchByTitle(action.title, resp => resp)

      return {
        ...state,
        movies: movies,
      };

    case FETCH_BY_ID:

      return {
        ...state, count: state.count - 1,

      };

    default:
      return state;

  }

};

export default reducer;