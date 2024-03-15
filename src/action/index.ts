import axios from "axios";
import { Dispatch } from "redux";

export const fetchNowShowing = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        params: {
          api_key: `${import.meta.env.VITE_API_KEY}`,
          language: "en-US",
          page: 1,
        },
      }
    );

    dispatch({ type: "FETCH_NOW_SHOWING", payload: response.data.results });
  } catch (error) {
    console.error("Error fetching now showing movies:", error);
  }
};

export const fetchUpcoming = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming",
      {
        params: {
          api_key: `${import.meta.env.VITE_API_KEY}`,
          language: "en-US",
          page: 1,
        },
      }
    );
    dispatch({ type: "FETCH_UPCOMING", payload: response.data.results });
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
  }
};

export const fetchTopRated = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
        params: {
          api_key: `${import.meta.env.VITE_API_KEY}`,
          language: "en-US",
          page: 1,
        },
      }
    );
    dispatch({ type: "FETCH_TOP_RATED", payload: response.data.results });
  } catch (error) {
    dispatch;
    console.error("Error fetching top rated movies:", error);
  }
};

export const fetchMovieDetails =
  (movieId: number) => async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
          params: {
            api_key: `${import.meta.env.VITE_API_KEY}`,
          },
        }
      );
      dispatch({ type: "FETCH_MOVIE_DETAILS", payload: response.data });
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

export const searchMovies = (searchTerm: string, genreId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${searchTerm}&with_genres=${genreId}`
      );
      dispatch({ type: "SEARCH_MOVIES", payload: response.data.results });
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };
};

export const discoverMovies = (
  rating: string,
  genre: string,
  year: string,
  duration: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            api_key: `${import.meta.env.VITE_API_KEY}`,
            language: "en-US",
            sort_by: "popularity.desc",
            include_adult: false,
            include_video: false,
            page: 1,
            "vote_average.gte": rating,
            with_genres: genre !== "all" ? genre : undefined,
            primary_release_year: year !== "all" ? year : undefined,
            "with_runtime.gte": duration !== "all" ? duration : undefined,
          },
        }
      );

      dispatch({ type: "DISCOVER_MOVIES", payload: response.data.results });
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };
};

export const fetchSimilarMovies =
  (movieId: number) => async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar`,
        {
          params: {
            api_key: `${import.meta.env.VITE_API_KEY}`,
          },
        }
      );
      dispatch({ type: "SIMILAR_MOVIES", payload: response.data.results });
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };
