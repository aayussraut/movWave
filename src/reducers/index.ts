export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
}

export interface MovieState {
  nowShowing: Movie[];
  upcoming: Movie[];
  topRated: Movie[];
  discoveredMovies: Movie[];
  searchResults: Movie[];
  selectedMovie: Movie | null;
  similarMovies: Movie[];
}

interface Action {
  type: string;
  payload: Movie[] | Movie | null;
}

const initialState: MovieState = {
  nowShowing: [],
  upcoming: [],
  topRated: [],
  discoveredMovies: [],
  searchResults: [],
  selectedMovie: null,
  similarMovies: [],
};

const movieReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "FETCH_NOW_SHOWING":
      return { ...state, nowShowing: action.payload };
    case "FETCH_UPCOMING":
      return { ...state, upcoming: action.payload };
    case "FETCH_TOP_RATED":
      return { ...state, topRated: action.payload };
    case "SEARCH_MOVIES":
      return { ...state, searchResults: action.payload };
    case "FETCH_MOVIE_DETAILS":
      return { ...state, selectedMovie: action.payload };
    case "DISCOVER_MOVIES":
      return { ...state, discoveredMovies: action.payload };
    case "SIMILAR_MOVIES":
      return { ...state, similarMovies: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
