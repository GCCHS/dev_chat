var chatWindow = document.getElementsByClassName("chat-window")[0];
var inputBox = document.getElementsByClassName("message-input")[0];

var sendMessage = function(){
	var currentMessages = chatWindow.innerHTML;
	var inputMessage = inputBox.value;
	var appendedMessage = currentMessages + "<br/>" + inputMessage;
	chatWindow.innerHTML = appendedMessage;
}