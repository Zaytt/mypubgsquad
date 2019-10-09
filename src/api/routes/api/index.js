const statsApiRoutes = require('./stats');
const authApiRoutes = require('./auth');

module.exports = {
  stats: statsApiRoutes,
  auth: authApiRoutes
};
