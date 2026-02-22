const PORT = Number(process.env.PORT) || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/tsx';
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';
const CLIENT_ORIGINS = (process.env.CLIENT_ORIGINS || '')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean);
const SESSION_SECRET = process.env.SESSION_SECRET || 'change-this-in-production';
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  PORT,
  MONGO_URI,
  CLIENT_ORIGIN,
  CLIENT_ORIGINS,
  SESSION_SECRET,
  IS_PROD,
};
