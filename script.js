function sendSrsne() {
    var personName = document.getElementById("personName").value;
    var notification = document.getElementById("notification");
    var progressBar = document.getElementById("progressBar");

    if (Math.random() < 0.1) { // 10% chance of failure
        showAlert("Failed to send sršně on " + personName + ". Please try again later.", "error");
    } else {
        showAlert("Successfully sent sršně on " + personName + "!", "success");
    }
}

function showAlert(message, type) {
    var notification = document.getElementById("notification");
    var progressBar = document.getElementById("progressBar");
    notification.textContent = message;
    notification.className = "notification show " + type;
    progressBar.className = "progress-bar show-progress";

    // Set progress bar width to match notification box width
    var notificationWidth = notification.offsetWidth;
    progressBar.style.width = notificationWidth + "px";

    setTimeout(function() {
        notification.classList.remove("show");
        progressBar.classList.remove("show-progress");
    }, 5000);
}
