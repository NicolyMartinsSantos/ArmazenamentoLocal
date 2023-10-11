// Função para obter o tema salvo localmente
function getSavedTheme() {
    return localStorage.getItem('theme');
}

// Função para aplicar o tema
function applyTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    }
}

// Função para alternar entre os temas
function toggleTheme() {
    const currentTheme = getSavedTheme();
    if (currentTheme === 'dark') {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    applyTheme(getSavedTheme());
}

// Função para atualizar o contador de visitas
function updateVisitCount() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visitCount').textContent = visitCount;
}

// Inicialização
document.getElementById('changeTheme').addEventListener('click', toggleTheme);
applyTheme(getSavedTheme());
updateVisitCount();
