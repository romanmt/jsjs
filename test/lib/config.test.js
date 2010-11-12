require.paths.unshift(
  __dirname + '/../../lib'
);

var Config = require('config');

module.exports = {

  'test Config#getUsername': function(assert) {
    assert.equal('mattroman', Config.username());
  }

};
