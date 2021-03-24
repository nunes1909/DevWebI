function abrirModal() {
    document.getElementById('modal').style.backgroundColor = "#eb664a";
    document.getElementById('modal').style.marginTop = "30px";
}

function fecharModal() {
    document.getElementById('modal').style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById('modal').style.marginTop = "-1200px";
}

function validar() {
    if (document.getElementById('nome').value == '' && document.getElementById('telefone').value == '' && document.getElementById('email').value == '') {
        window.alert('Preencha todos os dados, pois são obrigatórios');
    }
}