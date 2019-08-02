const { stats } = require('../../../server/routes/index');

export default async (req, res) => {
  return stats.getSquadStats(req, res);
};
