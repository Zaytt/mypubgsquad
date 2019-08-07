import axios from 'axios';

import {
  GET_PLAYER_SEASONS,
  LOADING_STATS,
  SET_GAME_MODE,
  SET_SEASON,
  SET_PERSPECTIVE,
  SET_ERROR
} from './types';

// Get the individual info of each of the squad members
export const getPlayerSeasons = (squad, seasonid, refresh) => (dispatch, getState) => {
  dispatch(setStatsLoading());

  axios
    .get('/api/stats', {
      params: {
        squad,
        seasonid,
        refresh
      }
    })
    .then(res => {
      let payload = {
        stats: res.data,
        players: res.data.map(p => p.relationships.player.attributes.name),
        season: res.data[0].relationships.season.id
      };
      dispatch({
        type: GET_PLAYER_SEASONS,
        payload: payload
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERROR,
        payload: err.response.data
      });
    });
};

export const setGameMode = mode => dispatch => {
  dispatch({
    type: SET_GAME_MODE,
    payload: mode
  });
};

export const setPerspective = perspective => dispatch => {
  dispatch({
    type: SET_PERSPECTIVE,
    payload: perspective
  });
};

export const getCurrentSeason = () => dispatch => {
  axios
    .get('/api/seasons/current')
    .then(res => {
      dispatch({
        type: SET_SEASON,
        payload: res.data.id
      });
    })
    .catch(err => {
      dispatch({
        type: SET_SEASON,
        payload: ''
      });
    });
};

export const setStatsLoading = () => {
  return {
    type: LOADING_STATS
  };
};
