
const input = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");
const messages = document.getElementById("chat-messages");

let conversationState = "default";
// Define response rules for the chatbot
const responseRules = [
    {
        // Response rule for when the user greets the chatbot
        pattern: /\b(hello|hi|hey|greetings|good morning|good afternoon|good evening|yo)\b/i,
        response: "Hello! How can I help you?",
        nextState: "asked-how-can-help"
        
    },
    {
        // Response rule for when the user asks about Jackson's skills
        pattern: /\b(skill|skills|expertise|experience|background)\b/i,
        response: "Jackson has expertise in web development, machine learning, and cloud computing.",
        nextState: "default"
    },
    {
        // Response rule for when the user asks about Jackson's projects
        pattern: /\b(project|projects|work)\b/i,
        response: "Jackson has worked on several projects, including a personal portfolio website, a machine learning model for image classification, and a cloud-based application for data analysis.",
        nextState: "work-reply"
    },
    {
        // Response rule for when the user wants to contact Jackson
        pattern: /\b(contact|email|reach|message)\b/i,
        response: "You can contact Jackson via the contact form on this website.",
        nextState: "contact"
    },
    {
        // Response rule for when the user thanks the chatbot
        state: ["contact"],
        pattern: /\b(thanks|thx|thank you)\b/i,
        response: "You're welcome!",
        nextState: "default"
    },
    {
        // Response rule for when the user thanks the chatbot
        state: ["asked-how-can-help", "how-can-help"],
        pattern: /\b(thanks|thx|thank you)\b/i,
        response: "No problem! You can ask me about my projects, skills, experience, or contact information.",
        nextState: "default"
    },
    {

        // Response rule for when the user is unsure how to help
        state: ["asked-how-can-help", "how-can-help"],
        pattern: /\b(idk|i don't know|i dont know|not sure|unsure|nothing)\b/i,
        response: "No problem! You can ask me about my projects, skills, experience, or contact information.",
        nextState: "idk-reply"
    },
    {
        // Response rule for when the user asks how they can help
        state: "asked-how-can-help",
        pattern: /\b(help|assist|support)\b/i,
        response: "Sure! I can help you with information about my projects, skills, experience, or contact information.",
        nextState: "how-can-help"
    },
    {
        // Response rule for when the user is unsure how to help
        state: "idk-reply",
        pattern: /\b(ok|okay|k|sounds good)\b/i,
        response: "Great! Feel free to ask me about my projects, skills, experience, or contact information.",
        nextState: "default"
    },
    {
        pattern: /\b(ok|okay|sounds good|k)\b/i,
        response: "Great! Feel free to ask me about my projects, skills, experience, or contact information.",
        nextState: "default"
    },
    {
        state: "work-reply",
        pattern: /\b(cool|awesome|wow|amazing|fantastic|incredible|impressive|nice|great|excellent)\b/i,
        response: "Thank you! I'm glad you find my work impressive. If you'd like to see more, feel free to explore my projects section.",
        nextState: "appreciation-reply"
    },
    {
        state: "appreciation-reply",
        pattern: /\b(of course|ofc|no problem|np)\b/i,
        response: "In the meantime, feel free to ask me about my projects, skills, experience, or contact information.",
        nextState: "default"
    }
];





// Send message function
function sendMessage() {
    const question = input.value.trim();

    if (question === "") {
        return;
    }






    // Add the user's message to the chat window // 
    addMessage(question, "user-message");

    function addMessage(text, className) {
        const message = document.createElement("p");

        if (className === "user-message") {
            message.textContent = "User: " + text;
        } else {
            message.textContent = "PeakBot: " + text;
        }

        message.classList.add(className);
        messages.appendChild(message);

        messages.scrollTop = messages.scrollHeight;
    } // End of addMessage function //





    // Function to simulate bot typing indicator //
    function botIsTyping() {
        const typingIndicator = document.createElement("p");

            typingIndicator.textContent = "PeakBot is typing...";

            typingIndicator.classList.add("bot-typing");

            messages.appendChild(typingIndicator);

            setTimeout(function () {
                typingIndicator.remove();
            }, 800); // Remove the typing indicator after 800ms
        }






    // Default response if no rules match
    let botResponse =
        "I’m not sure about that yet. Try asking about Jackson’s skills, projects, resume, or contact information.";

    for (const rule of responseRules) {
        const correctState = !rule.state || (Array.isArray(rule.state) ? rule.state.includes(conversationState) : rule.state === conversationState);

        // Check if the current rule applies based on the conversation state
        if (correctState && rule.pattern.test(question)) {
            botResponse = rule.response;
            if (rule.nextState) {
                conversationState = rule.nextState || "default";
            break;
            }
        }
    } // End of for loop //





    // Display the bot's response after simulating typing
    botIsTyping();
    setTimeout(function () {
        addMessage(botResponse, "bot-message");
    }, 500);

    input.value = "";
} // End of sendMessage function //







function addMessage(text, className) {
    const message = document.createElement("p");
    message.textContent = text;
    message.classList.add(className);
    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;
}

sendButton.addEventListener("click", sendMessage);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }

});

    