const mongoose = require('mongoose');

async function connectDatabase(mongoUri) {
  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB');
}

module.exports = connectDatabase;
