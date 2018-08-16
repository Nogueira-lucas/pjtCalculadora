//VARIAVEIS GLOBAIS
var soma = false, div = false, sub = false, multi = false;
var x = 0;

//adiciona strings de numeros na caixa de texto
function add_numeros(num){
    document.getElementById("console").value += num;
}

//limpa caixa de texto
function limpar(){
    document.getElementById("console").value = "";
    habilita_Botoes();//botoes sim
}
function zerar(){
    soma = false;
    div = false;
    sub = false;
    multi = false;
    x = 0;
}

// disabled = false
function habilita_Botoes(){
    document.getElementById("soma").disabled    = false;
    document.getElementById("sub").disabled     = false;
    document.getElementById("div").disabled     = false;
    document.getElementById("mult").disabled    = false;
}

function desabilita_Botoes(){
    document.getElementById("soma").disabled    = true;
    document.getElementById("sub").disabled     = true;
    document.getElementById("div").disabled     = true;
    document.getElementById("mult").disabled    = true;
}
//Soma = true
function Soma(){
    x    = parseInt(document.getElementById("console").value);
    soma = true;
    document.getElementById("console").value = "";
    desabilita_Botoes(); //botoes não
}
//Multi = true
function Multi(){
    x     = parseInt(document.getElementById("console").value);
    multi = true;
    document.getElementById("console").value = "";
}

//Div = true
function Div(){
    x   = parseInt(document.getElementById("console").value);
    div = true;
    document.getElementById("console").value = "";
    desabilita_Botoes(); //botoes não
}

//Sub = true
function Sub(){
    x   = parseInt(document.getElementById("console").value);
    sub = true;
    document.getElementById("console").value = "";
    desabilita_Botoes(); //botoes não
}

//Exibe resultado 
function Igual(){
    if(soma){
        x += parseInt(document.getElementById("console").value);
        document.getElementById("console").value = x;
    }

    if(div){
        x /= parseInt(document.getElementById("console").value);
        document.getElementById("console").value = x;
    }

    if(sub){
        x -= parseInt(document.getElementById("console").value);
        document.getElementById("console").value = x;
    }

    if(multi){
        x *= parseInt(document.getElementById("console").value);
        document.getElementById("console").value = x;
    }
    zerar();
    habilita_Botoes();
}
