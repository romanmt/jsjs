var express     = require('express'),
    connect     = require('connect'),
    io          = require('socket.io'),
    fs          = require('fs'),
    sys         = require('sys'),
    TwitterNode = require('twitter-node').TwitterNode;

var creds = JSON.parse(fs.readFileSync('./config/twitter.json'));

var twit = new TwitterNode(
    {   user:     creds[0],
        password: creds[1],
        track:    ['jersey shore', 'snookie'],
        follow:   [28638191, 95938476, 111690277, 93935921]
    });

var pub = __dirname + '/public';

var app = express.createServer(
    connect.logger(),
    connect.staticProvider(pub),
    connect.compiler({ src: pub, enable: ['sass'] })
    );

var socket = io.listen(app);

app.set('reload views', 1000);

twit.headers['User-Agent'] = 'jersey shore node';

twit.addListener('tweet', function(tweet){
    socket.broadcast(
      JSON.stringify(
        { name: tweet.user.screen_name,
          text: tweet.text
        }));
}).stream();

app.get('/', function(req, res, next) {
  res.render('watch.html.haml')    
});

app.listen(3000);
