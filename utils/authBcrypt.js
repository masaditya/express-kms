const bcrypt = require("bcryptjs");

const hashPassword = (password, rounds, callback) => {
  bcrypt.genSalt(rounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      callback(err, hash)
    })
  })
};

const compare = (password, dbHash, callback) => {
  bcrypt.compare(password, dbHash, (error, match) => {
    if (match) {
      callback(null, true);
    } else {
      callback("Invalid", null);
    }
  });
};

module.exports = {
  hashPassword,
  compare,
};
