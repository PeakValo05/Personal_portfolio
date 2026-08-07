    document.getElementById("search-form").addEventListener("submit", function(e){
        e.preventDefault();
        // Add your search handling logic here
        const query = document.getElementById("search-box").value;
        

        // Example: Redirect to a search results page or perform an action based on the query
        if (query.includes("project") || query.includes("projects") || 
        query.includes("github") || query.includes("repo") || query.includes("repository") || query.includes("repos") || 
        query.includes("code") || query.includes("source")) {

            alert("Redirecting to project search results for: " + query);
            
            // window.location.href = "/search/projects?query=" + encodeURIComponent(query);
            window.open("https://github.com/PeakValo05?tab=repositories");
        }

        else if (query.includes("email") || query.includes("contact") || query.includes("reach")
        || query.includes("message") || query.includes("mail")
        || query.includes("inbox") || query.includes("send")
        || query.includes("communication") || query.includes("correspondence")) {
            alert("Redirecting to email contact for: " + query);

                window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=jwiser.dev@gmail.com",
        "_blank"
            );
        }

        else if (query.includes("resume") || query.includes("cv") || query.includes("curriculum vitae")
        || query.includes("job") || query.includes("career")
        || query.includes("employment") || query.includes("work")) {
            alert("Redirecting to resume for: " + query);

            window.open("/assets/Jackson's Resume.pdf");
        }


        
        else {
            // If no results found, you can show an alert or handle it as needed
            alert("No results found for your query.");
        }
    }); // End of search form submission event listener