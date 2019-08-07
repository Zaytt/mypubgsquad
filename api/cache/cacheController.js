const memjs = require('memjs');

let serverStr =
  process.env.NODE_ENV === 'production'
    ? process.env.MEMCACHIER_USERNAME +
      ':' +
      process.env.MEMCACHIER_PASSWORD +
      '@' +
      process.env.MEMCACHIER_SERVERS
    : 'localhost:11211';
const cache = memjs.Client.create(serverStr);

/**
 * GETS THE PLAYER SEASONS FROM THE CACHE
 * @param {Array<String>} players Player names array to look up
 */
const getCachedPlayerSeasons = async players => {
  const cachedPlayers = [];
  const nonCachedPlayers = [];

  await Promise.all(
    players.map(player => {
      return cache.get(`PlayerSeason:${player}`).then(({ value }) => {
        if (value) cachedPlayers.push(JSON.parse(value));
        else nonCachedPlayers.push(player);
      });
    })
  ).catch(err => {
    throw err;
  });

  return {
    cachedPlayers,
    nonCachedPlayers
  };
};

/**
 * STORES THE PLAYER SEASONS IN CACHE
 * @param {Array<PlayerSeason>} playersSeasons Array or single element of PlayerSeasons
 * to store in the cache
 */
const setCachedPlayerSeasons = async playerSeasons => {
  return Array.isArray(playerSeasons)
    ? await Promise.all(
        playerSeasons.map(ps => {
          return cache.set(
            `PlayerSeason:${ps.relationships.player.attributes.name}`,
            JSON.stringify(ps),
            { expires: 1800 }
          );
        })
      ).catch(err => {
        throw err;
      })
    : await cache
        .set(
          `PlayerSeason:${playerSeasons.relationships.player.attributes.name}`,
          JSON.stringify(playerSeasons),
          { expires: 1800 }
        )
        .then(res => true)
        .catch(err => {
          throw err;
        });
};

/**
 * GETS THE SEASONS FROM THE CACHE
 */
const getCachedSeasons = () => {
  return cache
    .get(`Seasons`)
    .then(({ value }) => JSON.parse(value))
    .catch(err => {
      throw err;
    });
};

/**
 * STORES THE SEASONS IN THE CACHE
 * @param {Array<Seasons>} seasons array of Seasons objects
 * to store in the cache
 */
const setCachedSeasons = async seasons => {
  return await cache
    .set(`Seasons`, JSON.stringify(seasons), { expires: 86400 })
    .then(res => true)
    .catch(err => {
      throw err;
    });
};

module.exports = {
  getCachedPlayerSeasons,
  setCachedPlayerSeasons,
  getCachedSeasons,
  setCachedSeasons
};
