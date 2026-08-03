function loadSidebar() {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('sidebar-placeholder').innerHTML = html;

            const isJapanese = location.pathname.includes('-ja.html');
            const suffix = isJapanese ? '-ja.html' : '.html';
            document.querySelectorAll('.sidebar a[data-page]').forEach(link => {
                link.href = link.dataset.page + suffix;
            });
        });
}

loadSidebar();