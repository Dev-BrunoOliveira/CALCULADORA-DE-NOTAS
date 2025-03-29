function calcularNota() {
    let nota1 = parseFloat(document.getElementById('nota1').value) || 0;
    let nota2 = parseFloat(document.getElementById('nota2').value) || 0;
    let nota3 = parseFloat(document.getElementById('nota3').value) || 0;
    let nota4 = parseFloat(document.getElementById('nota4').value) || 0;
    let nota5 = parseFloat(document.getElementById('nota5').value) || 0;
    
    let total = nota1 + nota2 + nota3 + nota4 + nota5;
    let resultado = document.getElementById('resultado');
    
    if (total >= 6) {
        resultado.textContent = `Aprovado! Nota final: ${total.toFixed(1)}`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = `Reprovado! Nota final: ${total.toFixed(1)}`;
        resultado.style.color = 'red';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    let themeIcon = document.getElementById('theme-icon');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = '☀️'; 
    } else {
        themeIcon.textContent = '🌙'; 
    }
}
