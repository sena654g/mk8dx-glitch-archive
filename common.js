const pages = {
    ...homePage,
    ...stuckGlitchPages,
    ...afterimagePages,
    ...invertedCameraPages,
    ...buriedGlitchPages,
    ...pipeClipGlitchPages,
    ...edgeClipPages,
    ...wallCrossPages
};

function renderPage(pageName) {
    const page = pages[pageName] || pages['home'];
    document.title = page.title;
    document.getElementById('content-area').innerHTML = page.html;

    document.querySelectorAll('video').forEach(video => {
        video.volume = 0.2;
    });
}

function getCurrentPage() {
    return location.hash.replace('#', '') || 'home';
}

window.addEventListener('hashchange', () => {
    renderPage(getCurrentPage());
});

window.addEventListener('DOMContentLoaded', () => {
    renderPage(getCurrentPage());
});