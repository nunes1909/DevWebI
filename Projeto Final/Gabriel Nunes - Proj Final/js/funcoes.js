function abrirMapa() {
    document.getElementById('infos_5').style.display = "block";
    document.getElementById('fechar').style.display = "block";
}

function fecharMapa() {
    document.getElementById('infos_5').style.display = "none";
    document.getElementById('fechar').style.display = "none";
}

function validacao() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;

    if (nome == '') {
        window.alert('Senhor(a), preencha todos os campos' + '\n' + 'Pois são obrigatórios.')
    } else if (telefone == '') {
        window.alert('Senhor(a), preencha todos os campos' + '\n' + 'Pois são obrigatórios.')
    } else if (email == '') {
        window.alert('Senhor(a), preencha todos os campos' + '\n' + 'Pois são obrigatórios.')
    } else if (msg == '') {
        window.alert('Senhor(a), preencha todos os campos' + '\n' + 'Pois são obrigatórios.')
    } else {
        window.alert('Orçamento enviado com sucesso, ' + 'Sr(a) ' + nome + '\n' + 'Assim que possível, retornaremos o contato.')
    }
}