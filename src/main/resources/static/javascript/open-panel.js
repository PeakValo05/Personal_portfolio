const wrapper = document.getElementById("panel-wrapper");
const button = document.getElementById("panel-button");

button.addEventListener("click", function () {
    wrapper.classList.toggle("open");

    button.textContent =
        wrapper.classList.contains("open") ? "Close" : "Open";
});