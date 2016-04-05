var chatWindow = document.getElementsByClassName("chat-window")[0];
var inputBox = document.getElementsByClassName("message-input")[0];

var client = new Faye.Client('http://localhost:8000/');

client.subscribe('/messages', function(message) {
  console.log('Got a message: ' + message.text);
});

var sendMessage = function(){
	//var currentMessages = chatWindow.innerHTML;
	var inputMessage = inputBox.value;
	client.publish('/messages', {
  		text: inputMessage
	});
	//var appendedMessage = currentMessages + "<br/>" + inputMessage;
	//chatWindow.innerHTML = appendedMessage;
}