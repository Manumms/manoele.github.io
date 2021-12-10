function mostrarNotas() {
    var txtChinchila = document.getElementById('chinchilas');
    var txtAnos = document.getElementById('anos');
    var chinchilas = parseInt(document.getElementById('chinchilas').value);
    var anos = parseInt(document.getElementById('anos').value);
    var result = "";

    if (chinchilas < 2 || isNaN(chinchilas)) {
        alert("São necessárias no mínimo duas chinchilas. Insira um valor válido...");
        txtChinchila.focus();
        return;
    }
    if (anos < 1 || isNaN(anos)) {
        alert("Insira um valor válido para os anos...");
        txtAnos.focus();
        return;
    }

    for (var i = 1; i <= anos; i++) {
        if (i == 1) {
            result += `${i}º Ano: ${chinchilas} Chinchilas\n`;
        } else {
            chinchilas *= 3;
            result += `${i}º Ano: ${chinchilas} Chinchilas\n`;
        }
    }

    document.getElementById('resultado').innerHTML = result;
}

var botao = document.getElementById('btnChinchilas');
botao.addEventListener('click', mostrarNotas);