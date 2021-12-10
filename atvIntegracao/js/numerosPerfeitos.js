function verificaPerfeicao() {
    var num = parseInt(document.getElementById('numero').value);
    var aux;
    var soma = 0;
    var j = 0;
    var numeros = "";

    
    if (num < 0 || isNaN(num)) {
        alert("Informe um número válido...");
        document.getElementById('numero').focus();
        return;
    }

    for (var i = num; i > 1; i--) {
        if (!((num / i) > Math.floor(num / i))) {
            aux = num / i;
            console.log(aux);
            soma += aux;
            numeros += aux;
            if (i != 2) {
                numeros += ", ";
            }
        }
    }

    var par1 = document.getElementById("divisores");
    par1.innerHTML = `Divisores do ${num}: ${numeros} (Soma: ${soma})`;

    var par2 = document.getElementById("verificaPerfeicao");

    if (num == soma) {
        par2.innerHTML = `${num} É um Número Perfeito`;
    } else {
        par2.innerHTML = `${num} NÃO É um Número Perfeito`;
    }
}

var botao = document.getElementById('btnVerifica');
botao.addEventListener('click', verificaPerfeicao);