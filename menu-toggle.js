document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

 window.addEventListener('hashchange', () => {
    requestAnimationFrame(() => {
        sidebar.classList.remove('open');
    });
});

    // ★これを追加
    sidebar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            const target = link.getAttribute("href");

            if (target === location.hash || (target === "#home" && location.hash === "")) {
                sidebar.classList.remove("open");
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (
            sidebar.classList.contains('open') &&
            !sidebar.contains(e.target) &&
            !toggle.contains(e.target)
        ) {
            sidebar.classList.remove('open');
        }
    });
});