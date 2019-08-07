import { combineReducers } from 'redux';
import playerSeasonsReducer from './playerSeasonsReducer';
import togetherStatsReducer from './togetherStatsReducer';

export default combineReducers({
  playerSeasons: playerSeasonsReducer,
  squad: togetherStatsReducer
});
