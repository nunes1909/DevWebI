function abrirModal(){
    document.getElementById('modal_pai').style.zIndex="3";
    document.getElementById('modal_pai').style.backgroundColor="rgba(0,0,0,0.7)";
    document.getElementById('modal').style.marginTop="80px";
}

function fecharModal(){
    document.getElementById('modal_pai').style.zIndex="1";
    document.getElementById('modal_pai').style.backgroundColor="rgba(0,0,0,0)";
    document.getElementById('modal').style.marginTop="-500px";
}

function validar(){
    var nome = document.getElementById('nome').value;
    var telefone =  document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;
    
    if(nome == ''){
        document.getElementById('nome').style.border ="solid 0.5px red";
        document.getElementById('telefone').style.border="solid 0.5px #d1d1d1";
        document.getElementById('email').style.border="solid 0.5px #d1d1d1";
        document.getElementById('msg').style.border="solid 0.5px #d1d1d1";
        document.getElementById('resposta').innerHTML="Preencha o nome";
        document.getElementById('resposta').style.color="red";
        document.getElementById('resposta').style.fontSize="0.9em";
    }else if(telefone == ''){
        document.getElementById('telefone').style.border ="solid 0.5px red";
        document.getElementById('nome').style.border="solid 0.5px #d1d1d1";
        document.getElementById('email').style.border="solid 0.5px #d1d1d1";
        document.getElementById('msg').style.border="solid 0.5px #d1d1d1";
        document.getElementById('resposta').innerHTML="Preencha o telefone";
        document.getElementById('resposta').style.color="red";
        document.getElementById('resposta').style.fontSize="0.9em";
    }else if(email == ''){
        document.getElementById('email').style.border ="solid 0.5px red";
        document.getElementById('nome').style.border="solid 0.5px #d1d1d1";
        document.getElementById('telefone').style.border="solid 0.5px #d1d1d1";
        document.getElementById('msg').style.border="solid 0.5px #d1d1d1";
        document.getElementById('resposta').innerHTML="Preencha o e-mail";
        document.getElementById('resposta').style.color="red";
        document.getElementById('resposta').style.fontSize="0.9em";
    }else if(msg == ''){
        document.getElementById('msg').style.border ="solid 0.5px red";
        document.getElementById('nome').style.border="solid 0.5px #d1d1d1";
        document.getElementById('email').style.border="solid 0.5px #d1d1d1";
        document.getElementById('telefone').style.border="solid 0.5px #d1d1d1";
        document.getElementById('resposta').innerHTML="Preencha a mensagem";
        document.getElementById('resposta').style.color="red";
        document.getElementById('resposta').style.fontSize="0.9em";
    }else{
        document.getElementById('nome').style.border="solid 0.5px #d1d1d1";
        document.getElementById('email').style.border="solid 0.5px #d1d1d1";
        document.getElementById('telefone').style.border="solid 0.5px #d1d1d1";
        document.getElementById('msg').style.border="solid 0.5px #d1d1d1";
        document.getElementById('resposta').innerHTML="Dados enviados com sucesso!";
        document.getElementById('resposta').style.color="green";
        document.getElementById('resposta').style.fontSize="0.9em";
    }
}

function limpar(){
    document.getElementById('resposta').innerHTML='';
}