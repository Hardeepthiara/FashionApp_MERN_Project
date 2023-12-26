const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/fashionista', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to the databasecccccccc");
  } catch (error) {
    console.error('Could not connect to the database. Exiting now...', error);
    process.exit();
  }
};

module.exports = connectToDatabase;
