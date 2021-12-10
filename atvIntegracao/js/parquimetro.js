function verificaMinutos() {
    var valor = parseFloat(document.getElementById('numero').value);
    var par2 = document.getElementById("resultado");
    var par3 = document.getElementById("troco");

    let troco = 0;

    if (valor < 0 || isNaN(valor)) {
        alert("Informe um número válido...");
        document.getElementById('numero').focus();
        return;
    }


    if (valor < 1.00) {
        par2.innerHTML = "Valor Insuficiente";
    } else if (valor >= 1.00 && valor < 1.75) {
        par2.innerHTML = "Tempo: 30 min";
        if (valor > 1.00) {
            troco = valor - 1.00;
            par3.innerHTML = "Troco R$: " + troco;
        } else {
            par3.innerHTML = "";
        }
    } else if (valor >= 1.75 && valor < 3.00) {
        par2.innerHTML = "Tempo: 60 min";
        if (valor > 1.75) {
            troco = valor - 1.75;
            par3.innerHTML = "Troco R$: " + troco;
        } else {
            par3.innerHTML = "";
        }
    } else if (valor >= 3.00) {
        par2.innerHTML = "Tempo: 120 min";
        if (valor > 3.00) {
            troco = valor - 3.00;
            par3.innerHTML = "Troco R$: " + troco;
        } else {
            par3.innerHTML = "";
        }
    }

}
var botao = document.getElementById('btnVerifica');
botao.addEventListener('click', verificaMinutos);