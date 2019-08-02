const _ = require('lodash');
const seasonsController = require('./seasonsController');
const cache = require('../../cache/cacheController');

const { getPlayersSeasonStats, getSquadStatsFromMatches } = require('../../core/statsAnalysis');

const test = async (req, res) => {
  res.json(req.query);
};
/**
 * @route GET /api/stats?squad=[playernames]&season=[seasonid]
 * @description Returns the stats of a squad of players for a given season
 * @returns {<Array<PlayerSeasons>>} An array of filtered pubg.js PlayerSeasons objects.
 * @access Public
 */
const getSquadStats = async (req, res) => {
  let { squad, season, refresh } = req.query;
  if (!season) {
    let currentSeason = await seasonsController.getCurrentSeason();
    season = currentSeason.id;
  }

  const playerNamesArray = squad.split(',');

  try {
    let playersStats, fetchedPlayers;
    // If refresh == true, skip checking for cached players
    if (refresh) {
      fetchedPlayers = await getPlayersSeasonStats(playerNamesArray, season);
      playersStats = Array.isArray(fetchedPlayers)
        ? fetchedPlayers.map(p =>
            _.pick(p, ['attributes', 'relationships.player', 'relationships.season'])
          )
        : _.pick(fetchedPlayers, ['attributes', 'relationships.player', 'relationships.season']);
    } else {
      // Check cache for stored players
      let { cachedPlayers, nonCachedPlayers } = await cache.getCachedPlayerSeasons(
        playerNamesArray
      );
      // If there's non cached players, fetch them
      if (nonCachedPlayers.length > 0) {
        fetchedPlayers = await getPlayersSeasonStats(nonCachedPlayers, season);
        const newCachedPlayers = Array.isArray(fetchedPlayers)
          ? fetchedPlayers.map(p =>
              _.pick(p, ['attributes', 'relationships.player', 'relationships.season'])
            )
          : _.pick(fetchedPlayers, ['attributes', 'relationships.player', 'relationships.season']);
        // Cache the fetched players
        await cache.setCachedPlayerSeasons(newCachedPlayers);
        cachedPlayers = cachedPlayers.concat(newCachedPlayers);
      }
      playersStats = cachedPlayers;
    }
    res.status(200).json(playersStats);
  } catch (error) {
    if (error.message.status) {
      res.status(error.message.status).json(error.message);
    } else if (error.status) {
      res.status(error.status).json(error);
    } else {
      res.status(error).json(error.message);
    }
  }
};

/**
 * @route GET /api/stats/matches
 * @description returns the stats of players from the matches that they have played together this season
 */
const getSquadMatchesStats = async (req, res) => {
  let { matches, playerNames } = req.body;
  try {
    res.status(200).json(await getSquadStatsFromMatches(matches, playerNames));
  } catch (error) {
    console.log(error);
    if (error.status) {
      res.status(error.status).json({
        error: error.status,
        message: error.message
      });
    } else {
      res.status(500).json({
        error: 500,
        message: error.message
      });
    }
  }
};

module.exports = {
  test,
  getSquadStats,
  getSquadMatchesStats
};
