const { pubgApiKey } = require('../config/keys');

// Require model and initiate client with api key
const pubg = require('@zaytt/pubg');
const pubgClient = new pubg.Client(pubgApiKey, 'steam');

module.exports = pubgClient;
