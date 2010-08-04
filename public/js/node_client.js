(function(){
  function IoClient(host, $messages) {
    var socket = new io.Socket(host);
    socket.connect();
    var $messages = $messages;
 
    socket.addEvent('message', function(message) {
      var tweet = JSON.parse(message)
      $messages.prepend("<div class='message'><span class='username'>@" + tweet.name + ":</span> " + spanJerseyShore(tweet.text) + "</div>");
      $('.message').first().slideDown('slow');
    });
  } 

  var spanJerseyShore = function(message) {
    var parseTweet = /^(.+)(Jersey Shore|jersey shore)(.+)$/;
    result = parseTweet.exec(message);
    return result[1] + "<span class='jersey-shore'>" + result[2] + "</span>" + result[3];
  }

  window.IoClient = IoClient;
}) ();
