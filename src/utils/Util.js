import _intersectionBy from 'lodash.intersectionby';
import axios from 'axios';

/**
 * @description Get the matches that the given players have played together
 * @param {Array<PlayerSeason>} playerSeasons an array of playerSeasons objects
 * @returns {Array<Matches>} containing arrays of matches that the players in [playerSeasons] have in common
 */
export const getMatchesTogether = playerSeasons => {
  let matchesTogether = playerSeasons[0].relationships.player.relationships.matches;

  for (let i = 1; i < playerSeasons.length; i++) {
    // Find duo matches that the players have in common
    matchesTogether = _intersectionBy(
      matchesTogether,
      playerSeasons[i].relationships.player.relationships.matches,
      'id'
    );
  }
  return matchesTogether;
};

export const getRankTitle = rank => {
  if (rank === 0) return 'Unranked';

  const ranks = [
    'Beginner',
    'Novice',
    'Experienced',
    'Skilled',
    'Specialist',
    'Expert',
    'Survivor',
    'LoneSurvivor'
  ];
  const index = Math.trunc(rank / 1000);

  if (index === 5) return ranks[5];
  if (index >= 6) return ranks[6];

  return ranks[index];
};

export const getRankTitleLevel = rank => {
  if (rank === 0) return 'Unranked';
  const levels = ['V', 'IV', 'III', 'II', 'I'];

  const level = Math.trunc((rank % 1000) / 200);

  return `${getRankTitle(rank)} ${levels[level]}`;
};

export const sanitizeString = str => {
  let newStr = str.replace(/[^a-z0-9áéíóúñü,.,_-]/gim, ' ');
  return newStr.trim();
};

export const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Delete the Auth Header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const isEmpty = value =>
  value == undefined ||
  value == null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value == 'string' && value.trim().length === 0);
