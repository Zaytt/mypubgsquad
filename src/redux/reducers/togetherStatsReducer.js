import {
  SET_SQUAD_MEMBERS,
  SET_SQUAD_MEMBERS_FETCHED,
  SET_SQUAD_MEMBERS_COLORS,
  SET_SQUAD_GAME_MODE,
  SET_SQUAD_PERSPECTIVE,
  SELECT_PLAYER,
  GET_SQUAD_STATS,
  LOADING_SQUAD_STATS,
  SET_SQUAD_ERROR
} from '../actions/types';

const initialState = {
  membersPicked: [],
  membersFetched: [],
  membersColors: {},
  stats: {},
  mode: 'squad',
  perspective: 'FPP',
  selectedPlayer: '',
  season: '',
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SQUAD_MEMBERS:
      return { ...state, membersPicked: payload };
    case SET_SQUAD_MEMBERS_FETCHED:
      return { ...state, membersFetched: payload };
    case SET_SQUAD_MEMBERS_COLORS:
      return { ...state, membersColors: payload };
    case SET_SQUAD_GAME_MODE:
      return { ...state, mode: payload };
    case SET_SQUAD_PERSPECTIVE:
      return { ...state, perspective: payload };
    case GET_SQUAD_STATS:
      return { ...state, stats: payload, loading: false, error: null };
    case SELECT_PLAYER:
      return { ...state, selectedPlayer: payload };
    case LOADING_SQUAD_STATS:
      return { ...state, loading: true };
    case SET_SQUAD_ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
