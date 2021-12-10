function verificaLados() {
    var a = parseInt(document.getElementById('ladoA').value);
    var b = parseInt(document.getElementById('ladoB').value);
    var c = parseInt(document.getElementById('ladoC').value);

    var par2 = document.getElementById("resultado");
    var par3 = document.getElementById("tipo");

    if (b <= 0 || a <= 0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
        par2.innerHTML = "";
        par3.innerHTML = "";
        alert("Informe um número válido...");
        document.getElementById('ladoA').focus();
        return;
    }

    if(a > b + c || b > a + c || c > a + b){

        par2.innerHTML = "Lados não podem formar um triângulo";
        par3.innerHTML = "";
    
    } else {
        par2.innerHTML = "Lados podem formar um triângulo";
        if( a == b && b == c){
    
            par3.innerHTML = "Tipo: Equilátero";
    
        } else if( a == b || b == c || a == c){
    
            par3.innerHTML = "Tipo: Isósceles";
    
        } else{
    
            par3.innerHTML = "Tipo: Escaleno";
    
        }
    }

}
    var botao = document.getElementById('btnVerifica');
    botao.addEventListener('click', verificaLados);