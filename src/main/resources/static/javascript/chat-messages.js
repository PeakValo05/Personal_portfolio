    document.getElementById("search-form").addEventListener("submit", function(e){

             e.preventDefault();
 
    
        // e.preventDefault();
const responseRules = [
    {
        pattern: /\b(hello|hi|hey|howdy)\b/i,
        response: "Hello! How can I help you?"
    },
    {
        pattern: /\b(bye|goodbye|see you|later)\b/i,
        response: "Goodbye! Thanks for visiting my portfolio."
    },
    {
        pattern: /\b(project|projects|work)\b/i,
        response: "Taking you to my projects.",
        action: function () {
            document.getElementById("projects-section")
                .scrollIntoView({ behavior: "smooth" });
        }
    },
    {
        pattern: /\b(resume|cv|curriculum vitae|vita|pdf|doc|docx)\b/i,
        response: "Opening my resume.",
        action: function () {
            window.open("/assets/Jackson's Resume.pdf", "_blank");
        }
    },
    {
        pattern: /\b(email|contact|message|mail|gmail)\b/i,
        response: "Opening my contact page.",
        action: function () {
        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=jwiser.dev@gmail.com&su=Portfolio%20Contact",
            "_blank"
        );
    }
    },
    {
        pattern: /\b(school|university|college|education)\b/i,
        response: "Taking you to my school.",
        action: function () {
            window.location.href = "https://www.gcu.edu/"; 
        }
    },
    
    {
        pattern: /\b(hello|hi|yo)\b/i,
        responses: [
            "Hello! How can I help you?",
            "Hi there! What can I do for you?",
            "Hey there! How's it going?",
            "Yo! What's up?",
            "Greetings! How can I assist you today?",
            "Hi! How can I help you today?"
        ]
    },
    {
        pattern: /\b(LOL|HAHA|FUNNY|ROFL|LMAO|XD|LMFAO|lol|haha)\b/i,
        responses: [
            "Haha, that's funny!", "LOL!", "ROFL!",
            "HAHA, what's so funny?",
            "LMAO, I can't stop laughing!"
        ]
    },
    {       
        pattern: /\b(bye|goodbye|see you|later)\b/i,
        responses: ["Goodbye! Thanks for visiting my portfolio."]
    
    },
    {
        pattern: /\b(whats your favorite language?|favorite language?|fav language?)\b/i,
        response: "I really enjoy working with JavaScript, Java, and C#."
    },
    {
        
        pattern: /\b(whats a good joke?|tell me a joke|know any jokes?|joke)\b/i,
            responses: [
                "Why do programmers prefer dark mode? Because light attracts bugs!",
                "Why did the developer go broke? Because they used up all their cache!",
                "There are 10 kinds of people: those who understand binary and those who don't.",
                "Why was the JavaScript developer sad? Because they didn't Node how to Express themselves."
    ]
    }
];






// MAIN FUNCTIONALITY FOR SEARCH BOX
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const message = document.getElementById("redirect-message");
const errorMessage = document.getElementById("error-message");


function findMatchingRule(query) {
    return responseRules.find(function (rule) {
        return rule.pattern.test(query);
    });
}


// Show a response while typing, but don't run the action
searchBox.addEventListener("input", function () {
    const query = searchBox.value.trim();
    const matchedRule = findMatchingRule(query);

    message.classList.add("d-none");
    errorMessage.classList.add("d-none");

    if (query.length === 0) {
        return;
    }

    if (matchedRule) {
        message.textContent = matchedRule.response;
        message.classList.remove("d-none");
    } else {
        errorMessage.textContent =
            "Sorry, I didn't understand that. Please try again.";

        errorMessage.classList.remove("d-none");
    }
});


// Run the action only after the user presses Enter or Search
searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const query = searchBox.value.trim();
    const matchedRule = findMatchingRule(query);

if (matchedRule) {
    let responseText;

    if (matchedRule.responses) {
        const randomIndex = Math.floor(
            Math.random() * matchedRule.responses.length
        );

        responseText = matchedRule.responses[randomIndex];
    } else {
        responseText = matchedRule.response;
    }

    message.textContent = responseText;
    message.classList.remove("d-none");

    if (matchedRule.action) {
        matchedRule.action();
    }
    } else {
        message.classList.add("d-none");

        errorMessage.textContent =
            "Sorry, I didn't understand that. Please try again.";

        errorMessage.classList.remove("d-none");
    }
});
});