const modal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");
const closeModal = document.querySelector(".close-modal");

// Select all video items or play buttons
const videoCards = document.querySelectorAll(".video-item, .play-btn-large");

videoCards.forEach(card => {
    card.addEventListener("click", () => {
        // You can customize the URL here. 
        // For a real site, you could store the URL in a data-attribute on the HTML element
        const videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; 
        
        videoPlayer.src = videoURL;
        modal.style.display = "flex";
    });
});

// Close modal when clicking 'X'
closeModal.onclick = function() {
    modal.style.display = "none";
    videoPlayer.src = ""; // Stop the video
}

// Close modal when clicking outside the video
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        videoPlayer.src = ""; 
    }
}