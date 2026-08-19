    document.getElementById("search-form").addEventListener("submit", function(e){
        e.preventDefault();
        // Add your search handling logic here
        const query = document.getElementById("search-box").value;
        // Get the redirect message element
        const message = document.getElementById("redirect-message");
        // Get the error message element
        const errorMessage = document.getElementById("error-message");
        // Get the spell message element
        const spellMessage = document.getElementById("spell-message");
   
        // Get the project button element
        const projectButton = document.getElementById("projectButton");

        // Get the redirect message element
        const redirectMessage = document.getElementById("redirectMessage");

        // Get the project buttons
        const projectButtons = document.querySelectorAll(".project-button");
  

        // Example: Redirect to a search results page or perform an action based on the query
        if (query.includes("project") || query.includes("projects") || 
        query.includes("github") || query.includes("repo") || query.includes("repository") || query.includes("repos") || 
        query.includes("code") || query.includes("source")) {
    


            message.textContent = "Redirecting to GitHub results for: " + query;

            message.classList.remove("d-none");

            setTimeout(function () {
                message.classList.add("d-none");

                window.open(
                    "https://github.com/PeakValo05?tab=repositories",
                    "_blank"
                );
            }, 3000);
            // window.location.href = "/search/projects?query=" + encodeURIComponent(query);
        }

        else if (query.includes("email") || query.includes("contact") || query.includes("reach")
        || query.includes("message") || query.includes("mail")
        || query.includes("inbox") || query.includes("send")
        || query.includes("communication") || query.includes("correspondence")) {
            

            message.textContent = "Redirecting to email results for: " + query;

            message.classList.remove("d-none");
   
            setTimeout(function () {
                message.classList.add("d-none");
                window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=jwiser.dev@gmail.com",
                    "_blank"
                );
            }, 3000);
        }

        else if (query.includes("resume") || query.includes("cv") || query.includes("curriculum vitae")
        || query.includes("job") || query.includes("career")
        || query.includes("employment") || query.includes("work")) {


            message.textContent = "Redirecting to resume results for: " + query;

            message.classList.remove("d-none");
   
            setTimeout(function () {
                message.classList.add("d-none");
                window.open("/assets/Jackson's Resume.pdf");
            }, 3000);
        }

        // error message for misspelled resume search
        else if (query.includes("resum") || query.includes("cv") || query.includes("curriculum vitae")) {
            spellMessage.textContent = "Please type 'resume' or 'career' to view the resume!";
            spellMessage.classList.remove("d-none");
   
            setTimeout(function () {
                spellMessage.classList.add("d-none");
            }, 3000);
        }

        // error message for misspelled GitHub search
        else if (query.includes("GitHu") || query.includes("projec") || query.includes("rep") || query.includes("repos") || query.includes("repositor")) {
            spellMessage.textContent = "Please type 'GitHub' or 'projects' to view the GitHub page!";
            spellMessage.classList.remove("d-none");
   
            setTimeout(function () {
                spellMessage.classList.add("d-none");
            }, 3000);
        }


        // error message for misspelled email search
        else if (query.includes("emai") || query.includes("contac") || query.includes("reac") || query.includes("messag") || query.includes("mai")) {
            spellMessage.textContent = "Please type 'email' or 'contact' to view the email page!";
            spellMessage.classList.remove("d-none");
   
            setTimeout(function () {
                spellMessage.classList.add("d-none");
            }, 3000);
        }
        // error message made red
        else {
            // If no results found, you can show an alert or handle it as needed
            errorMessage.textContent = "No results found for: " + query;

            errorMessage.classList.remove("d-none");
   
            setTimeout(function () {
                errorMessage.classList.add("d-none");
            }, 3000);
        }
    }); // End of search form submission event listener


