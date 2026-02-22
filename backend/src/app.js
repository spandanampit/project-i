const express = require('express');
const cors = require('cors');
const { CLIENT_ORIGIN, CLIENT_ORIGINS } = require('./config/env');
const buildSessionConfig = require('./config/session');
const authRoutes = require('./routes/authRoutes');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');

const app = express();

const allowedOrigins = new Set([CLIENT_ORIGIN, ...CLIENT_ORIGINS]);
const corsOptions = {
  origin(origin, callback) {
    // Allow tools/postman/same-origin requests without an Origin header.
    if (!origin) {
      callback(null, true);
      return;
    }

    if (allowedOrigins.has(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(buildSessionConfig());

app.get('/api/health', (req, res) => {
  res.status(200).json({ ok: true });
});

app.use('/api/auth', authRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
