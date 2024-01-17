const chk = document.getElementById('chk')

function setModoNoturno(value) {
    localStorage.setItem('modoNoturno', value);
}

// Função para obter o estado atual do modo noturno do localStorage
function getModoNoturno() {
    return localStorage.getItem('modoNoturno') === 'true';
}


chk.addEventListener('change', () => {
    document.body.classList.toggle('dark', chk.checked);
    setModoNoturno(chk.checked);
});

document.addEventListener('DOMContentLoaded', function () {
    if (getModoNoturno()) {
        chk.checked = true;
        document.body.classList.add('dark');
    }
});