// YouTube Player API
let player;
let isPlaying = false;
let playerReady = false;

// Initialize YouTube Player
window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('youtubePlayer', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
};

function onPlayerReady(event) {
    playerReady = true;
    // Player is ready, music starts automatically (muted)
    event.target.playVideo();
    event.target.mute(); // Ensure muted
    isPlaying = false; // Start muted
    updateMusicButton();
}

function onPlayerStateChange(event) {
    // Handle player state changes if needed
}

// Music Toggle Function
function toggleMusic() {
    if (!playerReady || !player) {
        console.log('Player non ancora pronto');
        return;
    }
    
    const button = document.getElementById('musicToggle');
    
    if (isPlaying) {
        // Mute
        player.mute();
        isPlaying = false;
    } else {
        // Unmute
        player.unMute();
        if (player.getPlayerState() !== YT.PlayerState.PLAYING) {
            player.playVideo();
        }
        isPlaying = true;
    }
    updateMusicButton();
}

function updateMusicButton() {
    const button = document.getElementById('musicToggle');
    if (button) {
        button.textContent = isPlaying ? '🔊 Musica ON' : '🔇 Musica';
    }
}

// Load YouTube IFrame API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Add event listener to music button
document.addEventListener('DOMContentLoaded', function() {
    const musicBtn = document.getElementById('musicToggle');
    if (musicBtn) {
        musicBtn.addEventListener('click', toggleMusic);
    }
});

// Card hover effect
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.invitation-card');
    if (card) {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    }
});

// Sparkle effect on click
document.addEventListener('click', function(e) {
    createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.background = '#ffd700';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.boxShadow = '0 0 10px #ffd700, 0 0 20px #ffd700';
    sparkle.style.animation = 'sparkleAnim 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add sparkle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnim {
        0% {
            transform: scale(1) translate(0, 0);
            opacity: 1;
        }
        100% {
            transform: scale(0) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);