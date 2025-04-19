const data = {
    "Hi": "Hi there! I'm a chatbot here to assist you?",
    "Hello": "Hello! How can I help you today?",
    "What is your Name": "I'm just a chatbot, so I don't have a name, but you can call me chatBot.",
    "Where are you": "I'm from the digital world, always ready to chat!",
    "How are you": "I'm just a chatbot, but I'm here to assist You.",
    "Do you have any Hobbies and/or Interests?": "I'm always helping users, so my hobby is chatting with people like you!",
    "What is your favorite color?": "I'm a chatbot, so I don't have personal preferences for colors.",
    "What did you eat today": "I don't eat, but I can help you find delicious recipes and food-related information.",
    "Do you enjoy listening to music?": "I can't listen to music, but I'm here to chat about it!",
    "Bye": "Bye! Take care and have a great day!",
    "Can you help me": "Ya sure I am always present here to help you.",
};

function getResponse(userInput) {
    for (const [pattern, response] of Object.entries(data)) {
        if (userInput.includes(pattern)) {
            return response;
        }
    }
    return "I'm sorry, I didn't understand that. Can you please rephrase your sentence?";
}

console.log("Chatbot: Hi! I'm a simple chatbot, I'm here to assist you!");

while (true) {
    const userInput = prompt("Me: ");
    if (userInput === 'Bye') {
        console.log("Chatbot: Goodbye! Have a great day!");
        break;
    }
    const response = getResponse(userInput);
    console.log("Chatbot:", response);
}

