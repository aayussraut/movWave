interface Action {
  type: string;
  payload: any;
}

const initialState = {
  nowShowing: [],
  upcoming: [],
  topRated: [],
  selectedMovie: null,
};

const movieReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "FETCH_NOW_SHOWING":
      console.log("Here", action.payload);
      return { ...state, nowShowing: action.payload };
    case "FETCH_UPCOMING":
      return { ...state, upcoming: action.payload };
    case "FETCH_TOP_RATED":
      return { ...state, topRated: action.payload };
    case "FETCH_MOVIE_DETAILS":
      return { ...state, selectedMovie: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
