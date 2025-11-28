const starContainer = document.getElementById("star-container");
const stars = document.querySelectorAll(".star");
const submitBtn = document.getElementById("submit-btn");

let selectedRating = 0;

// ⭐ Hover effect using event bubbling
starContainer.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("star")) return;

    const value = e.target.dataset.value;
    highlightStars(value);
});

// ⭐ Remove hover when mouse leaves stars
starContainer.addEventListener("mouseout", () => {
    highlightStars(selectedRating); 
});

// ⭐ Click event using bubbling
starContainer.addEventListener("click", (e) => {
    if (!e.target.classList.contains("star")) return;

    selectedRating = e.target.dataset.value;
    highlightStars(selectedRating);
});

// Function to highlight stars
function highlightStars(count) {
    stars.forEach(star => {
        star.classList.remove("hover", "active");

        if (star.dataset.value <= count) {
            star.classList.add("active");
        }
    });
}

// ⭐ Submit Button
submitBtn.addEventListener("click", () => {
    if (selectedRating === 0) {
        alert("Please select a rating first!");
        return;
    }

    // Hide rating card
    document.getElementById("rating-card").classList.add("hidden");

    // Show thank you card
    document.getElementById("thank-card").classList.remove("hidden");

    // Set selected rating text
    document.getElementById("selected-rating")
        .textContent = `You selected ${selectedRating} out of 5`;
});
