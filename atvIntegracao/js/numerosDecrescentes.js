function Decrescer() {
    var num = parseInt(document.getElementById('numero').value);
    var texto = "";

    
    if (num < 0 || isNaN(num)) {
        alert("Informe um número válido...");
        document.getElementById('numero').focus();
        return;
    }

    for (var i = num; i >= 1; i--) {

        texto = texto + i + ", ";
        

    }

    var par1 = document.getElementById("decrescente");
    par1.innerHTML = `Entre ${num} e 1: ${texto}`;
}

var botao = document.getElementById('btnDecrescer');
botao.addEventListener('click', Decrescer);