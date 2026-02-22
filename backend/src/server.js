const app = require('./app');
const connectDatabase = require('./config/database');
const { PORT, MONGO_URI } = require('./config/env');

async function startServer() {
  try {
    await connectDatabase(MONGO_URI);

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exit(1);
  }
}

startServer();
