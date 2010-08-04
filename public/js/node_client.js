(function(){
  function IoClient(host, $messages) {
    var socket = new io.Socket(host);
    socket.connect();
    var $messages = $messages;
 
    socket.addEvent('message', function(message) {
      var tweet = JSON.parse(message)
      $messages.prepend("<div class='message'><span class='username'>@" + tweet.name + ":</span> " + tweet.text + "</div>");
      $('.message').first().slideDown('slow');
    });
 } 

  window.IoClient = IoClient;
}) ();
