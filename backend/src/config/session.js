const session = require('express-session');
const { SESSION_SECRET, IS_PROD } = require('./env');

function buildSessionConfig() {
  return session({
    name: 'tsx.sid',
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: IS_PROD,
      sameSite: IS_PROD ? 'none' : 'lax',
      maxAge: 1000 * 60 * 60 * 24,
    },
  });
}

module.exports = buildSessionConfig;
