function abrirModal(){
    document.getElementById('modal_pai').style.backgroundColor="rgba(0,0,0,0.7)";
    document.getElementById('modal').style.marginTop="80px";
}

function fecharModal(){
    document.getElementById('modal_pai').style.backgroundColor="rgba(0,0,0,0)";
    document.getElementById('modal').style.marginTop="-500px";
}

function calcular(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var operacao = document.getElementById('operacao').value;

    var resposta;


    switch(operacao){
        case '+':
            resposta = valor1 + valor2;
            break;
        case '-':
            resposta = valor1 - valor2;
            break;
        case '*':
            resposta = valor1 * valor2;
            break;
        case '/':
            resposta = valor1 / valor2;
            break;
        case '%':
            resposta = valor1 % valor2;
            break;
        case '**':
            resposta = valor1 ** valor2;
            break;
        case 'raiz':
            resposta = valor1 ** (1/valor2);
    }


    /*
    if(operacao == '+'){
        resposta = valor1 + valor2;
    }else if(operacao == '-'){
        resposta = valor1 - valor2;
    }else if(operacao == '*'){
        resposta = valor1 * valor2;
    }else if(operacao == '/'){
        resposta = valor1 / valor2;
    }else if(operacao == '%'){
        resposta = valor1 % valor2;
    }else if(operacao == '**'){
        resposta = valor1 ** valor2;
    }else{
        resposta = valor1 ** (1/valor2);
    }
*/




    document.getElementById('resultado').innerHTML = "O resultado do cálculo é: "+resposta;
    document.getElementById('valor1').style.border="solid 0.5px #000";
    document.getElementById('valor2').style.border="solid 0.5px #000";
    document.getElementById('resultado').style.color="green";
}

function validar(){
    if (document.getElementById('valor1').value == '' && document.getElementById('valor2').value == ''){
        document.getElementById('valor1').style.border="solid 0.5px red";
        document.getElementById('valor2').style.border="solid 0.5px red";
        document.getElementById('resultado').innerHTML = "Preencha os os valores, poi são obrigatórios";
        document.getElementById('resultado').style.color="red";
        document.getElementById('resultado').style.fontSize="1.2em";
    }else if(document.getElementById('valor1').value == ''){
        document.getElementById('valor1').style.border="solid 0.5px red";
    }else if(document.getElementById('valor2').value == ''){
        document.getElementById('valor2').style.border="solid 0.5px red";
    }
}