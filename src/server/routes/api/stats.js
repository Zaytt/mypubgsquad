const express = require('express');
const router = express();
const statsController = require('./controllers/statsController');

/**
 * @route GET /api/stats?squad=[playernames]&season=[seasonid]
 * @description Returns the stats of a squad of players for a given season
 * @returns {<Array<PlayerSeasons>>} An array of filtered pubg.js PlayerSeasons objects.
 * @access Public
 */
router.get('/', async (req, res) => {
  return statsController.getSquadStats(req, res);
});

/**
 * @route GET /api/stats/squad/matches
 * @description returns the stats of players from the matches that they have played together this season
 */
router.post('/matches', async (req, res) => {
  return statsController.getSquadMatchesStats(req, res);
});

module.exports = router;
