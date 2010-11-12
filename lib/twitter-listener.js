var TwitterListener = exports
  , Config          = require(__dirname + '/config')
  , TwitterNode     = require('twitter-node').TwitterNode;
 
TwitterListener.start = function(callback) {
    
  var twitterNode = new TwitterNode(
      { track:    ['jersey shore', 'snookie', '#jersey_shore', '#jerseyshore']
      , follow:   [28638191, 95938476, 111690277, 93935921]
      , user:     Config.username()
      , password: Config.password()
  });
    
  twitterNode.headers['User-Agent']= 'jersey shore node';
  twitterNode.addListener('tweet', callback);
  twitterNode.stream();
};
