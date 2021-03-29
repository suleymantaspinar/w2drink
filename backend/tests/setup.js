
const mongoose = require('mongoose');

beforeEach(function(done) {
  function clearDB() {
    for (let i in mongoose.connection.collections) {
      mongoose.connection.collections[i].deleteMany(function() {});
    }
    return done();
  }

  if (mongoose.connection.readyState === 0) {
    mongoose.connect(
      `mongodb://localhost:27017/${process.env.MONGODB_TEST}`,
      function(err) {
        if (err) {
          throw err;
        }
        return clearDB();
      }
    );
  } else {
    return clearDB();
  }
});

afterEach(function(done) {
  mongoose.disconnect();
  return done();
});

afterAll(done => {
  return done();
});