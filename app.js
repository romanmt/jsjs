var express         = require('express')
  , connect         = require('connect')
  , io              = require('socket.io')
  , sys             = require('sys')
  , TwitterListener = require(__dirname + '/lib/twitter-listener');

var pub = __dirname + '/public';

var app = express.createServer(
    connect.logger(),
    connect.staticProvider(pub),
    connect.compiler({ src: pub, enable: ['sass'] })
    );

var socket = io.listen(app);

app.set('reload views', 1000);

TwitterListener.start( function(tweet){
  socket.broadcast(
    JSON.stringify(
      { name: tweet.user.screen_name,
        text: tweet.text
      })
  );
});

app.get('/', function(req, res, next) {
  res.render('watch.html.haml')    
});

app.listen(3000);
