const _mergeWith = require('lodash.mergewith');
const _add = require('lodash.add');
const _omit = require('lodash.omit');
const _isEmpty = require('lodash.isempty');
const _isNumber = require('lodash.isnumber');
const _merge = require('lodash.merge');
const _keys = require('lodash.keys');
const _intersectionBy = require('lodash.intersectionby');
const pubg = require('../pubg_api/pubg');

/**
 * @description Returns an array containing info about a player and their season stats,
 * as well as the matches played this season
 * @param {string[]} playerNames array with a string of player names to lookup
 * @param {string} seasonid the PUBG season id
 * @returns {Array<Promise<PlayerSeason>>|<Promise<PlayerSeason>>} array containgin player info and season stats
 */
const getPlayersSeasonStats = async (playerNames, seasonid) => {
  const players = await pubg.getPlayer({ name: playerNames });
  return Array.isArray(players)
    ? await pubg.getManyPlayerSeason({ players: players }, seasonid).catch(err => {
        throw err;
      })
    : await pubg.getPlayerSeason(players, seasonid).catch(err => {
        throw err;
      });
};

/**
 * Combines the season stats of a group of players into their total aggregate
 * for each game mode, for a given season.
 * @param {PlayerSeason[]} playersStats an array of players that contains their stats for a season
 * @returns {Object} an object
 */
const getCombinedStats = playersStats => {
  // Declare the combined stats obj
  const combinedStats = {
    solo: {},
    soloFPP: {},
    duo: {},
    duoFPP: {},
    squad: {},
    squadFPP: {}
  };

  // Sum the stats of the season of each player to get the squad total stats
  playersStats.forEach(player => {
    _mergeWith(combinedStats.solo, player.season.stats.solo, _add);
    _mergeWith(combinedStats.soloFPP, player.season.stats.soloFPP, _add);
    _mergeWith(combinedStats.duo, player.season.stats.duo, _add);
    _mergeWith(combinedStats.duoFPP, player.season.stats.duoFPP, _add);
    _mergeWith(combinedStats.squad, player.season.stats.squad, _add);
    _mergeWith(combinedStats.squadFPP, player.season.stats.squadFPP, _add);
  });

  return combinedStats;
};

/**
 * @description Get the matches that the given players have played together
 * @param {PlayerSeason[]} playersStats an array of players that contains their stats for a season
 * @returns {Object} containing arrays of matches that the players in [playersStats] have in common,
 * separated by game mode (duo, duoFPP, squad, squadFPP)
 */
const getMatchesTogether = playersStats => {
  let matchesTogether = {};

  matchesTogether.duo = playersStats[0].season.matches.matchesDuo;
  matchesTogether.duoFPP = playersStats[0].season.matches.matchesDuoFPP;
  matchesTogether.squad = playersStats[0].season.matches.matchesSquad;
  matchesTogether.squadFPP = playersStats[0].season.matches.matchesSquadFPP;

  for (let i = 1; i < playersStats.length; i++) {
    // Find duo matches that the players have in common
    matchesTogether.duo = _intersectionBy(
      matchesTogether.duo,
      playersStats[i].season.matches.matchesDuo,
      'id'
    );

    matchesTogether.duo = matchesTogether.duo.map(match => match.fetch());

    // Find duoFPP matches that the players have in common
    matchesTogether.duoFPP = _intersectionBy(
      matchesTogether.duoFPP,
      playersStats[i].season.matches.matchesDuoFPP,
      'id'
    );

    // Find squad matches that the players have in common
    matchesTogether.squad = _intersectionBy(
      matchesTogether.squad,
      playersStats[i].season.matches.matchesSquad,
      'id'
    );

    // Find squadFPP matches that the players have in common
    matchesTogether.squadFPP = _intersectionBy(
      matchesTogether.squadFPP,
      playersStats[i].season.matches.matchesSquadFPP,
      'id'
    );
  }

  return matchesTogether;
};

/**
 * @description Get the stats of a group of players from the matches that they have played
 * together this season.
 * @param {String[]} playerNames Array of player names
 * @param {String} seasonid id of the season
 * @returns {Object} Object with stats of the players for each game mode
 */
const getSquadStatsFromMatches = async (matches, playerNames) => {
  //Fetch all the matches
  const fetchedMatches = await Promise.all(
    matches.map(async match => {
      return await pubg.getMatch(match.id);
    })
  );
  const fullDuoMatches = fetchedMatches.filter(match => match.attributes.gameMode === 'duo');
  const fullDuoFPPMatches = fetchedMatches.filter(match => match.attributes.gameMode === 'duo-fpp');
  const fullSquadMatches = fetchedMatches.filter(match => match.attributes.gameMode === 'squad');
  const fullSquadFPPMatches = fetchedMatches.filter(
    match => match.attributes.gameMode === 'squad-fpp'
  );

  // Get the stats of the players from the duo matches
  const duoMatchesStats = getPlayersStatsFromMatches(fullDuoMatches, playerNames);

  // Get the stats of the players from the duo fpp matches
  const duoFPPMatchesStats = getPlayersStatsFromMatches(fullDuoFPPMatches, playerNames);

  // Get the stats of the players from the squad matches
  const squadMatchesStats = getPlayersStatsFromMatches(fullSquadMatches, playerNames);

  // Get the stats of the players from the squad fpp matches
  const squadFPPMatchesStats = getPlayersStatsFromMatches(fullSquadFPPMatches, playerNames);

  return {
    duo: {
      gamesPlayed: fullDuoMatches.length,
      wins: duoMatchesStats[playerNames[0]].wins,
      top10s: duoMatchesStats[playerNames[0]].top10s,
      stats: duoMatchesStats
    },
    duoFPP: {
      gamesPlayed: fullDuoFPPMatches.length,
      wins: duoFPPMatchesStats[playerNames[0]].wins,
      top10s: duoFPPMatchesStats[playerNames[0]].top10s,
      stats: duoFPPMatchesStats
    },
    squad: {
      gamesPlayed: fullSquadMatches.length,
      wins: squadMatchesStats[playerNames[0]].wins,
      top10s: squadMatchesStats[playerNames[0]].top10s,
      stats: squadMatchesStats
    },
    squadFPP: {
      gamesPlayed: fullSquadFPPMatches.length,
      wins: squadFPPMatchesStats[playerNames[0]].wins,
      top10s: squadFPPMatchesStats[playerNames[0]].top10s,
      stats: squadFPPMatchesStats
    }
  };
};

/**
 * @description Return an object that contains an array for each game mode that contains the
 * aggregated stats of each squad member
 * @param {Match[]} matches An array of Match that the players have in common
 * @param {string[]} players Array of player names
 * @returns {Object} Object with player stats for each game mode
 */
const getPlayersStatsFromMatches = (matches, players) => {
  const squadStats = {
    teamTotal: {}
  };

  players.forEach(player => {
    squadStats[player] = {
      wins: 0,
      top10s: 0,
      alive: 0,
      suicides: 0,
      zoneDeaths: 0,
      badges: []
    };
  });

  // Traverse the matches
  for (let i = 0; i < matches.length; i++) {
    let { rosters } = matches[i].relationships;
    // Traverse the rosters from the match
    for (let j = 0; j < rosters.length; j++) {
      let { participants } = rosters[j].relationships;
      // If the roster contains any of the squad players process it, else -> search next roster
      if (
        players.some(p => {
          for (let i = 0; i < participants.length; i++) {
            if (p === participants[i].attributes.stats.name) {
              return true;
            }
          }
          return false;
        })
      ) {
        // Traverse the participants in the roster
        for (let k = 0; k < participants.length; k++) {
          let { name } = participants[k].attributes.stats;
          // If the participant is not part of the queried players, skip him
          if (!players.includes(name)) continue;
          // Merge the stats obj of the player with the match stats
          _mergeWith(
            squadStats[name],
            participants[k].attributes.stats,
            (objValue, srcValue, key, object, source, stack) =>
              sumPlayerStats(objValue, srcValue, key, object, source, stack)
          );

          // Merge the stats of a player with the team total if its a squad
          _mergeWith(
            squadStats.teamTotal,
            participants[k].attributes.stats,
            (objValue, srcValue, key, object, source, stack) =>
              sumPlayerStats(objValue, srcValue, key, object, source, stack)
          );
        }
      } else {
        continue;
      }

      // Roster was found, no need to keep iterating this match's rosters
      break;
    }
  }

  // Add the badges for the players and return the updated object
  return calculateBadges(squadStats);
};

/**
 * Function used to merge the objects for the player stats from each match
 * Parameters are the ones used for lodash's mergeWith function
 */
const sumPlayerStats = (objValue, srcValue, key, object) => {
  if (key === 'longestKill') {
    return objValue > srcValue ? objValue : srcValue;
  } else if (key === 'winPlace') {
    srcValue === 1 ? object.wins++ : null;
    srcValue <= 10 ? object.top10s++ : null;
  } else if (key === 'deathType') {
    srcValue === 'byzone'
      ? object.zoneDeaths++
      : srcValue === 'suicide'
      ? object.suicide++
      : srcValue === 'alive'
      ? object.alive++
      : null;
  } else {
    return _isNumber(objValue) ? objValue + srcValue : srcValue;
  }
};

/**
 * @description Add the corresponding badges to each player in the squad stats
 * @param squadStats array of players and their stats for a given set of matches
 * @returns the updated squadStats obj with each player with their badges
 */
const calculateBadges = squadStats => {
  if (_isEmpty(squadStats.teamTotal)) {
    return squadStats;
  } else {
    // Get the top metrics and their value
    const badges = [
      { stat: 'assists', description: 'Most Assists' },
      { stat: 'damageDealt', description: 'Most Damage Dealt' },
      { stat: 'headshotKills', description: 'Most Headshots' },
      { stat: 'kills', description: 'Most Kills' },
      { stat: 'longestKill', description: 'Longest Kill' },
      { stat: 'revives', description: 'Most Revives' },
      { stat: 'roadKills', description: 'Most Road Kills' },
      { stat: 'swimDistance', description: 'Most Distance Swimmed' },
      { stat: 'teamKills', description: 'Most Teamkills' },
      { stat: 'timeSurvived', description: 'Longest Time Survived' },
      { stat: 'vehicleDestroys', description: 'Most Vehicles Destroyed' },
      { stat: 'walkDistance', description: 'Most Distance Walked' },
      { stat: 'suicides', description: 'Most Suicides' },
      { stat: 'weaponsAcquired', description: 'Most Weapons Looted' },
      { stat: 'zoneDeaths', description: 'Most Zone Deaths' }
    ];

    for (let i = 0; i < badges.length; i++) {
      let topPlayer = getTopPlayer(squadStats, badges[i].stat);
      if (topPlayer.player) {
        squadStats[topPlayer.player].badges.push(_omit(_merge(topPlayer, badges[i]), 'player'));
      }
    }

    return squadStats;
  }
};

/**
 * @description Get the player name that has the highest score in a given metric
 * @param squadStats the stats obj of a group of players
 * @param metric the metric to be evaluated
 * @returns and object with the player index in the squadStat param and the value of the max metric
 */
const getTopPlayer = (squadStats, metric) => {
  squadArray = _keys(squadStats); // Get an array of player names from the squad
  let topValue = 0;
  let topPlayer = null;
  // Traverse the player names array
  for (let i = 1; i < squadArray.length; i++) {
    if (squadStats[squadArray[i]][metric] > topValue) {
      topValue = squadStats[squadArray[i]][metric];
      topPlayer = squadArray[i];
    }
  }

  return { stat: metric, player: topPlayer, value: topValue };
};

module.exports = {
  calculateBadges,
  getPlayersSeasonStats,
  getCombinedStats,
  getMatchesTogether,
  getSquadStatsFromMatches
};
