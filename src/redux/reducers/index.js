import { combineReducers } from 'redux';
import playerSeasonsReducer from './playerSeasonsReducer';
import togetherStatsReducer from './togetherStatsReducer';
import authReducer from './authReducer';

export default combineReducers({
  playerSeasons: playerSeasonsReducer,
  squad: togetherStatsReducer,
  auth: authReducer
});
