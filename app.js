const next = require('next');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const url = require('url');
const path = require('path');
const compression = require('compression');
const expressValidator = require('express-validator');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL;

const app = next({ dev });
const handler = app.getRequestHandler();

// Store PUBG Seasons in memcached
const seasonsController = require('./api/routes/api/controllers/seasonsController');
seasonsController.storeSeasons();

app.prepare().then(() => {
  const server = express();

  // if (!dev) {
  //   /* Helmet helps secure our app by setting various HTTP headers */
  //   server.use(helmet());
  //   /* Compression gives us gzip compression */
  //   server.use(compression());
  // }

  /* Body Parser built-in to Express as of version 4.16 */
  server.use(express.json());
  /* Express Validator will validate form data sent to the backend */
  // server.use(expressValidator());

  /* give all Next.js's requests to Next.js server */
  server.get('/_next/*', (req, res) => {
    handler(req, res);
  });

  server.get('/static/*', (req, res) => {
    handler(req, res);
  });

  // const MongoStore = mongoSessionStore(session);
  // const sessionConfig = {
  //   name: 'next-connect.sid',
  //   // secret used for using signed cookies w/ the session
  //   secret: process.env.SESSION_SECRET,
  //   store: new MongoStore({
  //     mongooseConnection: mongoose.connection,
  //     ttl: 14 * 24 * 60 * 60 // save session for 14 days
  //   }),
  //   // forces the session to be saved back to the store
  //   resave: false,
  //   // don't save unmodified sessions
  //   saveUninitialized: false,
  //   cookie: {
  //     httpOnly: true,
  //     maxAge: 1000 * 60 * 60 * 24 * 14 // expires in 14 days
  //   }
  // };

  // if (!dev) {
  //   sessionConfig.cookie.secure = true; // serve secure cookies in production environment
  //   server.set('trust proxy', 1); // trust first proxy
  // }

  // /* Apply our session configuration to express-session */
  // server.use(session(sessionConfig));

  // /* Add passport middleware to set passport up */
  // server.use(passport.initialize());
  // server.use(passport.session());

  // server.use((req, res, next) => {
  //   /* custom middleware to put our user data (from passport) on the req.user so we can access it as such anywhere in our app */
  //   res.locals.user = req.user || null;
  //   next();
  // });

  /* morgan for request logging from client
  - we use skip to ignore static files from _next folder */
  // server.use(
  //   logger('dev', {
  //     skip: req => req.url.includes('_next')
  //   })
  // );

  /* Error handling from async / await functions */
  server.use((err, req, res, next) => {
    const { status = 500, message } = err;
    res.status(status).json(message);
  });

  /**
   * @route GET /stats/ page
   * @param {string} squad Comma separated string containing the players in the squad to look up
   * @description returns the stats of players from the matches that they have played together this season
   */
  server.get('/stats/:squad', (req, res) => {
    return app.render(req, res, '/stats', { squad: req.params.squad });
  });

  /* Load stats routes */
  const routes = require('./api/routes/index');
  server.use('/api/stats', routes.api.stats);

  /* default route
     - allows Next to handle all other routes
     - includes the numerous `/_next/...` routes which must    be exposed for the next app to work correctly
     - includes 404'ing on unknown routes */
  server.get('*', (req, res) => {
    handler(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Server listening on ${ROOT_URL}`);
  });
});
