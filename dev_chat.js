var chatWindow = document.getElementsByClassName("chat-window")[0];
var inputBox = document.getElementsByClassName("message-input")[0];

var client = new Faye.Client('http://localhost:8000/');

jQuery(inputBox).on("keyup", function(event){
	if(event.keyCode === 13){
		sendMessage();
	}
})

client.subscribe('/messages', function(message) {
  var currentMessages = chatWindow.innerHTML;
  var appendedMessage = message.text + "<br/>" + currentMessages;
  chatWindow.innerHTML = appendedMessage;
  console.log('Got a message: ' + message.text);
});

var sendMessage = function(){
	var inputMessage = inputBox.value;
	client.publish('/messages', {
  		text: inputMessage
	});
	inputBox.value = '';
}