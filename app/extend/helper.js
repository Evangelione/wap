'use strict';

const crypto = require('crypto');
const bcrypt = require('bcrypt');

module.exports = {
  md5(str) {
    const md5 = crypto.createHash('md5');
    md5.update(str);
    return md5.digest('hex');
  },
  bcrypt(str) {
    const saltRounds = 10;
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(str, salt, (err, hash) => {
          if (err) {
            reject(err);
          }
          resolve(hash);
        });
      });
    });
  },
  bcryptSync(str) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(str, salt);
  },
  checkBcrypt(str, hash) {
    console.log(hash);
    return bcrypt.compare(str, hash);
  },
};
