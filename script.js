function castVote() {
    let voterName = document.getElementById("voterName").value.trim();
    let candidate = document.getElementById("candidate").value.trim();
    let message = document.getElementById("message");

    // Validation
    if (!voterName || !candidate || !isNaN(voterName) || !isNaN(candidate)) {
        message.style.color = "red";
        message.textContent = "Please enter valid names.";
        return;
    }

    // Display popup confirmation
    document.getElementById("popupMessage").textContent = `Thank you, ${voterName}! Your vote for "${candidate}" has been recorded.`;
    document.getElementById("popup").style.display = "flex";

    // Clear input fields
    document.getElementById("voterName").value = "";
    document.getElementById("candidate").value = "";
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
