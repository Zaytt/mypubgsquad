const pubgAPI = require('../../pubg_api/pubg');
const { getCachedSeasons, setCachedSeasons } = require('../../cache/cacheController');

const storeSeasons = async () => {
  seasons = await pubgAPI.getSeasons();
  await setCachedSeasons(seasons)
    .then(res => console.log('Stored Seasons in Cache'))
    .catch(err => {
      console.warn('Failed to store seasons in cache');
      throw err;
    });
};

const getSeasons = async () => {
  let seasons = await getCachedSeasons();

  if (seasons) {
    return seasons;
  } else {
    seasons = await pubgAPI.getSeasons();
    await setCachedSeasons(seasons).catch(err => {
      throw err;
    });
    return seasons;
  }
};

const getCurrentSeason = async () => {
  const seasons = await getSeasons();
  return seasons.filter(season => season.attributes.isCurrentSeason)[0];
};

module.exports = {
  storeSeasons,
  getSeasons,
  getCurrentSeason
};
