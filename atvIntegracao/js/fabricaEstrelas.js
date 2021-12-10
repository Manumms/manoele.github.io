function criarEstrelas() {
    var quant = parseInt(document.getElementById('linhas').value);
    var txt = "";

    
    if (quant < 0 || isNaN(quant)) {
        alert("Informe um número válido...");
        document.getElementById('linhas').focus();
        return;
    }

    for (var i = 1; i <= quant; i++) {
        for(var j = 1; j <= i; j++) {
            txt += "*";
        }
        txt += "\n";
    }

    document.getElementById('resultado').innerHTML = `${txt}`;
}

var botao = document.getElementById('btnEstrelas');
botao.addEventListener('click', criarEstrelas);