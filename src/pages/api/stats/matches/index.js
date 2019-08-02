const { stats } = require('../../../../server/routes');

export default async (req, res) => {
  return stats.getSquadMatchesStats(req, res);
};
