document.getElementById('messageInput').addEventListener('input', function() {
    if (this.value.length > 1000) {
        this.value = this.value.substring(0, 1000); // Trim excess characters
    }
});

const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
    submitBtn.addEventListener('click', function(event) {
        const name = document.getElementById('nameInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const message = document.getElementById('messageInput').value.trim();
        const statusElement = document.getElementById('formStatus');

        // Clear any previous messages
        statusElement.textContent = "";
        statusElement.style.fontWeight = "bold";
        statusElement.style.fontSize = "1rem";
        
        // Simple email validation pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate inputs
        if (!name || !email || !message) {
            event.preventDefault(); // Prevents form submission

            if (!name) {
                statusElement.textContent = "⚠ Please fill out your name.";
                statusElement.style.color = "#00aaff"; // Aesthetic Sky Blue
            } else if (!email) {
                statusElement.textContent = "⚠ Please fill out your email.";
                statusElement.style.color = "#ff5733"; // Orange-Red
            } else if (!message) {
                statusElement.textContent = "⚠ Please fill out your message.";
                statusElement.style.color = "#ff0000"; // Bright Red
            }

            return;
        }

        // Validate email format
        if (!emailPattern.test(email)) {
            event.preventDefault(); // Prevents form submission
            statusElement.textContent = "❌ Please enter a valid email address.";
            statusElement.style.color = "#c70039"; // Deep Crimson
            return;
        }

        if (message.length > 1000) {
            event.preventDefault(); // Prevent form submission
            statusElement.textContent = "🚨 Message must be under 1000 characters.";
            statusElement.style.color = "#900C3F"; // Dark Maroon
            return;
        }
           // Apply animation when form is successfully submitted
    form.classList.add('sending');

    // Simulate form submission delay
    setTimeout(() => {
        form.style.display = "none"; // Hide form after animation
        statusElement.style.color = "#00ff99";
        statusElement.textContent = "Message sent successfully! 🚀";
    }, 600); // Matches the animation duration
    });
}
const videoList = ["GDlkCkcIqTs", "eDqfg_LexCQ", "IHTT_7AjoU8"];
let videoIndex = 0;
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: videoList[videoIndex],
        playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            playsinline: 1,
            fs: 0,
            iv_load_policy: 3,
            disablekb: 1
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        videoIndex = (videoIndex + 1) % videoList.length;
        player.loadVideoById(videoList[videoIndex]); // Loads new video
    }
}

// ✅ Keep Video Playing When Switching Tabs
document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "visible") {
        setTimeout(() => {
            if (player && player.getPlayerState() !== 1) {
                player.playVideo(); // Resume playback only if paused
            }
        }, 500);
    }
});

// ✅ Hide YouTube Overlay Completely (CSS Trick)
const style = document.createElement('style');
style.innerHTML = `
    iframe#player {
        pointer-events: none; /* Prevent user interaction */
    }
`;
document.head.appendChild(style);

// ✅ Load YouTube API
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
