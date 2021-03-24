





function calcular(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);

    var soma = valor1 + valor2;

    document.getElementById('resultado').innerHTML="O resultado da soma é: "+soma;
    document.getElementById('resultado').style.color="green";
    document.getElementById('valor1').style.border="solid 0.5px #000";
}
function validar(){
    if(document.getElementById('valor1').value == '' || document.getElementById('valor2').value == ''){
        document.getElementById('resultado').innerHTML="Preencha os campos, pois são obrigatórios";
        document.getElementById('resultado').style.color="red";
        document.getElementById('valor1').style.border="solid 0.5px red";
        document.getElementById('valor1').focus;
        
    }


}