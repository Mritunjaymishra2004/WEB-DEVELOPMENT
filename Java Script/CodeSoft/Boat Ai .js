function sendMessage() {
    const inputField = document.getElementById('userInput');
    const userInput = inputField.value.trim();
    
    if (userInput === '') return;

    displayMessage(userInput, 'user-message');

    const botResponse = getBotResponse(userInput);
    displayMessage(botResponse, 'bot-message');

    inputField.value = '';
    scrollChatToBottom();
}

function displayMessage(message, className) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `message ${className}`;
    messageContainer.textContent = message;

    document.getElementById('messages').appendChild(messageContainer);
}

function scrollChatToBottom() {
    const chatbox = document.getElementById('chatbox');
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input) {
    const lowerCaseInput = input.toLowerCase();

    if (lowerCaseInput.includes('hello')) {
        return 'Hi there! How can I help you today?';
    } else if (lowerCaseInput.includes('how are you')) {
        return 'I am just a bot, but I am functioning as expected!';
    } else if (lowerCaseInput.includes('bye')) {
        return 'Goodbye! Have a great day!';
    } else if (lowerCaseInput.includes('your name')) {
        return 'I am a rule-based chatbot. Nice to meet you!';
    } else {
        return "I'm sorry, I don't understand that. Could you please rephrase?";
    }
}
