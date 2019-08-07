import axios from 'axios';
import { getMatchesTogether } from '../../util/Util';

import {
  SET_SQUAD_MEMBERS,
  SET_SQUAD_MEMBERS_FETCHED,
  SET_SQUAD_MEMBERS_COLORS,
  SET_SQUAD_GAME_MODE,
  SET_SQUAD_PERSPECTIVE,
  SET_SQUAD_ERROR,
  SELECT_PLAYER,
  GET_SQUAD_STATS,
  LOADING_SQUAD_STATS
} from './types';

export const setSquadMembers = squadMembersArray => ({
  type: SET_SQUAD_MEMBERS,
  payload: squadMembersArray
});

export const setSquadMembersFetched = squadMembersArray => ({
  type: SET_SQUAD_MEMBERS_FETCHED,
  payload: squadMembersArray
});

export const setSquadMembersColors = squadMembersColors => ({
  type: SET_SQUAD_MEMBERS_COLORS,
  payload: squadMembersColors
});

export const setSquadGameMode = mode => dispatch => {
  dispatch({
    type: SET_SQUAD_GAME_MODE,
    payload: mode
  });
};

export const setSquadPerspective = perspective => dispatch => {
  dispatch({
    type: SET_SQUAD_PERSPECTIVE,
    payload: perspective
  });
};

export const selectPlayer = player => dispatch => {
  dispatch({
    type: SELECT_PLAYER,
    payload: player
  });
};

export const setSquadStatsLoading = () => {
  return {
    type: LOADING_SQUAD_STATS
  };
};

export const getSquadStats = () => (dispatch, getState) => {
  dispatch(setStatsLoading());

  const store = getState();
  const { stats } = store.playerSeasons;
  const { membersPicked } = store.squad;

  const matches = getMatchesTogether(
    stats.filter(ps => membersPicked.includes(ps.relationships.player.attributes.name))
  );

  axios
    .post('/api/stats/matches', { matches, playerNames: membersPicked })
    .then(res => {
      dispatch({
        type: GET_SQUAD_STATS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_SQUAD_ERROR,
        payload: err.response.data
      });
    });
};

export const setStatsLoading = () => {
  return {
    type: LOADING_SQUAD_STATS
  };
};
