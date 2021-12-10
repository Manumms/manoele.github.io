function mostrarNotas() {
    var txt = document.getElementById('valor');
    var valor = parseInt(document.getElementById('valor').value);
    var n100 = 0;
    var n50 = 0;
    var n10 = 0;
    var erro = false;

    while (valor != 0) {
        if (valor < 0 || isNaN(valor)) {
            alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
            txt.focus();
            return;
        } else if (Math.floor(valor / 100) != 0) {
            n100 = Math.floor(valor / 100);
            valor %= 100;
        } else if (Math.floor(valor / 50) != 0) {
            n50 = Math.floor(valor / 50);
            valor %= 50;
        } else if (Math.floor(valor / 10) != 0) {
            n10 = Math.floor(valor / 10);
            valor %= 10;
        } else {
            alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
            txt.focus();
            return;
        }
    }

    document.getElementById('n100').innerHTML = `Notas de R$ 100: ${n100}`;
    document.getElementById('n50').innerHTML = `Notas de R$ 50: ${n50}`;
    document.getElementById('n10').innerHTML = `Notas de R$ 10: ${n10}`;
}

var botao = document.getElementById('btnVerifica');
botao.addEventListener('click', mostrarNotas);