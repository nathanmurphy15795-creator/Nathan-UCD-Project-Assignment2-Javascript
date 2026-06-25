document.addEventListener("DOMContentLoaded", () => {

    console.log("Website loaded!");

});
// Dark Mode
const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// Contact Form Validation
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {

        let name = document.getElementById("name").value;

        if (name.length < 2) {
            alert("Please enter a valid name.");
            event.preventDefault();
        }
    });
}

// Album Rating
const ratingBtn = document.getElementById("rateAlbum");

if (ratingBtn) {
    ratingBtn.addEventListener("click", () => {
        document.getElementById("ratingMessage").textContent =
        "Thank you for rating this album!";
    });
}