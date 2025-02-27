function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");
    var videoContainer = document.getElementById("video-container");

    // Change these to your secret username and password
    if (username === "receipt" && password === "123") {
        message.innerHTML = "Unlocked! Enjoy the video.";
        message.style.color = "green";
        videoContainer.style.display = "block";
    } else {
        message.innerHTML = "Wrong username or password!";
        message.style.color = "red";
    }
}