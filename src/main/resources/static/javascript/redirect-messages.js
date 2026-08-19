const schoolButtons = document.querySelectorAll(".school-button");
const overlay = document.getElementById("redirect-overlay");
const projectButtons = document.querySelectorAll(".project-button");


schoolButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const schoolUrl = button.dataset.url;
        const messageId = button.dataset.message;
        const message = document.getElementById(messageId);

        showRedirect(message, schoolUrl);
    });
});


projectButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const projectUrl = button.dataset.url;
        const messageId = button.dataset.message;
        const message = document.getElementById(messageId);

        showRedirect(message, projectUrl);
    });
});

function showRedirect(message, url) {
    overlay.classList.remove("d-none");
    message.classList.remove("d-none");

    requestAnimationFrame(function () {
        overlay.classList.add("show");
        message.classList.add("show");
    });

    setTimeout(function () {
        overlay.classList.remove("show");
        message.classList.remove("show");

        setTimeout(function () {
            overlay.classList.add("d-none");
            message.classList.add("d-none");

            window.location.href = url;
        }, 350);
    }, 2000);
}