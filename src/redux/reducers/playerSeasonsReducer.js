import {
  GET_PLAYER_SEASONS,
  REFRESH_PLAYER_SEASONS,
  LOADING_STATS,
  SET_GAME_MODE,
  SET_PERSPECTIVE,
  SET_SEASON,
  SET_ERROR
} from '../actions/types';

const initialState = {
  players: [],
  stats: [],
  mode: 'squad',
  perspective: 'FPP',
  season: '',
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PLAYER_SEASONS:
      return {
        ...state,
        stats: payload.stats,
        season: payload.season,
        players: payload.players,
        loading: false,
        error: null
      };
    case REFRESH_PLAYER_SEASONS: {
      return {
        ...state,
        stats: payload,
        loading: false
      };
    }
    case LOADING_STATS:
      return { ...state, loading: true };
    case SET_GAME_MODE:
      return { ...state, mode: payload };
    case SET_PERSPECTIVE:
      return { ...state, perspective: payload };
    case SET_SEASON:
      return { ...state, season: payload };
    case SET_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
