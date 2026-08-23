
const input = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");
const messages = document.getElementById("chat-messages");

let conversationState = "default";
// Define response rules for the chatbot
const responseRules = [
    {
        // Response rule for when the user greets the chatbot
        pattern: /\b(hello|hi|hey)\b/i,
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
        nextState: "default"
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
        nextState: "default"
    },
    {
        // Response rule for when the user asks how they can help
        state: "asked-how-can-help",
        pattern: /\b(help|assist|support)\b/i,
        response: "Sure! I can help you with information about my projects, skills, experience, or contact information.",
        nextState: "how-can-help"

    }
];


// Send message function
function sendMessage() {
    const question = input.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user-message");

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
    }

    setTimeout(function () {
        addMessage(botResponse, "bot-message");
    }, 500);

    input.value = "";
}

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

    