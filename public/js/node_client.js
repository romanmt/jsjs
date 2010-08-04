(function(){
  function IoClient(host, $messages) {
    var socket = new io.Socket(host);
    socket.connect();
    var $messages = $messages;
 
    socket.addEvent('message', function(message) {
      $messages.prepend("<div class='message'>" + message + "</div>");
      $('.message').first().slideDown('slow');
    });
 } 

  window.IoClient = IoClient;
}) ();
