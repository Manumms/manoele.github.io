function verificaRaizQuadrada() {
    var num = parseInt(document.getElementById('numero').value);
    var result = 0;
    var par2 = document.getElementById("resultado");

    if (num < 0 || isNaN(num)) {
        alert("Informe um número válido...");
        document.getElementById('numero').focus();
        return;
    }

    result = Math.sqrt(num);


    if (Math.floor(Math.sqrt(num)) < Math.sqrt(num)) {
        par2.innerHTML = `Não há raiz exata para ${num}`;
    }
    else {
        par2.innerHTML = `A raiz quadrada de ${num} é ${result}`;
    }
}
    var botao = document.getElementById('btnVerifica');
    botao.addEventListener('click', verificaRaizQuadrada);