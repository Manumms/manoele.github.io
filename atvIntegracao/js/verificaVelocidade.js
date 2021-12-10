function verificaVelocidade() {
    var veloP = parseInt(document.getElementById('vP').value);
    var veloC = parseInt(document.getElementById('vC').value);
    var par2 = document.getElementById("resultado");

    if (veloP < 0 || veloC < 0 || isNaN(veloC) || isNaN(veloP)){
        par2.innerHTML = "";
        alert("Informe um número válido...");
        document.getElementById('veloP').focus();
        return;
    }


    if (veloC <= veloP) {
        par2.innerHTML = "Situação: Sem Multa";
    } else if (veloC > veloP && veloC <= (veloP + (veloP * 0.20))) {
        par2.innerHTML = "Situação: Multa Leve";
    }
    else if (veloC >= (veloP + (veloP * 0.20))) {
        par2.innerHTML = "Situação: Multa Grave";
    }
}
    var botao = document.getElementById('btnVerifica');
    botao.addEventListener('click', verificaVelocidade);