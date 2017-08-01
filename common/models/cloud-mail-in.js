'use strict';

module.exports = function(Cloudmailin) {

  Cloudmailin.email = function(callback) {
    console.log('email is incoming')
    callback(null);
  };

};
