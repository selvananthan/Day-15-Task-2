const textarea = document.getElementById('textarea');
const charCount = document.getElementById('charCount');
const container = document.getElementById('container');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const exitFullscreenBtn = document.getElementById('exitFullscreenBtn');

textarea.addEventListener('input', function() {
    const count = textarea.value.length;
    charCount.textContent = `${count} character${count !== 1 ? 's' : ''}`;
});

fullscreenBtn.addEventListener('click', function() {
    if (container.requestFullscreen) {
        container.requestFullscreen();
    } else if (container.mozRequestFullScreen) { // Firefox
        container.mozRequestFullScreen();
    } else if (container.webkitRequestFullscreen) { // Chrome, Safari and Opera
        container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) { // IE/Edge
        container.msRequestFullscreen();
    }
    fullscreenBtn.style.display = 'none';
    exitFullscreenBtn.style.display = 'inline-block';
});

exitFullscreenBtn.addEventListener('click', function() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
    fullscreenBtn.style.display = 'inline-block';
    exitFullscreenBtn.style.display = 'none';
});