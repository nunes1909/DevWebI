function calculadora(){
    var x = parseFloat(window.prompt("Digite o primeiro valor: "));
    var y = parseFloat(window.prompt("Digite o segundo valor: "));

    var soma = window.alert("A soma dos valores é: " + (x + y));
    var diferenca = window.alert("A diferença entre os valores é: " + (x - y));
    var produto = window.alert("O produto dos valores é: " + (x * y));
    var divisao = window.alert("A divisão dos valores é: " + (x / y));
    var soma = window.alert("O resto da divisão é: " + (x & y));
    var soma = window.alert("A potência dos valores é: " + math.pow(x, y));
    var soma = window.alert("A raiz dos valores é: " + math.sqrt(x + y));
}

function funcionario(){
    var nome = window.prompt("Digite seu nome: ");
    var vhora = window.prompt("Digite seu valor hora: ");
    var choraria = window.prompt("Digite sua carga horária: ");

    window.alert("O seu nome é: " + nome);
    window.alert("O seu valor hora é: " + vhora);
    window.alert("Sua carga horária é: " + choraria);
    window.alert("Seu salário bruto é: " + (vhora * choraria));
}

function aluno(){
    naluno = window.prompt("Digite seu nome: ");
    n1 = parseFloat(window.prompt("Digite sua nota 1: "));
    n2 = parseFloat(window.prompt("Digite sua nota 2: "));

    window.alert("O seu nome é: " + naluno);
    window.alert("A sua Nota 1 é: " + n1);
    window.alert("A sua Nota 2 é: " + n2);
    window.alert("A sua média final é: " + (n1 + n2 / 2));
}

function trocaVariaveis(){
    var a = window.prompt("Digite o primeiro valor: ")
    var b = window.prompt("Digite o segundo valor: ")
    var c = window.prompt("Digite o terceiro valor: ")

    window.alert("O primeiro valor é: " + c);
    window.alert("O segundo valor é: " + a);
    window.alert("O terceiro valor é: " + b)
}

function kg(){
    kilos = parseFloat(window.prompt("Digite seu Kg: "));

    window.alert("Engordando 15%, seu peso é: " + (kilos + (kilos * 0.15)));
    window.alert("Emagrecendo 20%, seu peso é: " + (kilos - (kilos * 0.20)));
}

function baskara(){
    window.alert("Bah sor, não consegui fazer, foi mal")
}

function positivoNegativo(){
    num = window.prompt("Digite um numero: ");

    if(num >= 0){
        window.alert("O número é Positivo!");
    }else{
        window.alert("O número é Negativo");
    }
}

function parImpar(){
    par = parseFloat(window.prompt("Digite um número: "));

    if (par % 2 == 0) {
        window.alert("O número é Par");
    } else {
        window.alert("O número é Ímpar!");
    }
}