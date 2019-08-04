import _intersectionBy from 'lodash.intersectionby';

/**
 * @description Get the matches that the given players have played together
 * @param {Array<PlayerSeason>} playerSeasons an array of playerSeasons objects
 * @returns {Array<Matches>} containing arrays of matches that the players in [playerSeasons] have in common
 */
const getMatchesTogether = playerSeasons => {
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

const getRankTitle = rank => {
  if (rank === 0) return 'Unranked';

  const ranks = [
    'Beginner',
    'Novice',
    'Experienced',
    'Skilled',
    'Specialist',
    'Expert',
    'Survivor',
    'Lone Survivor'
  ];
  const index = Math.trunc(rank / 1000);

  if (index === 5) return ranks[5];
  if (index >= 6) return ranks[6];

  return ranks[index];
};

const getRankTitleLevel = rank => {
  if (rank === 0) return 'Unranked';
  const levels = ['V', 'IV', 'III', 'II', 'I'];

  const level = Math.trunc((rank % 1000) / 200);

  return `${getRankTitle(rank)} ${levels[level]}`;
};

const sanitizeString = str => {
  let newStr = str.replace(/[^a-z0-9áéíóúñü,.,_-]/gim, ' ');
  return newStr.trim();
};

export { getMatchesTogether, getRankTitle, getRankTitleLevel, sanitizeString };
