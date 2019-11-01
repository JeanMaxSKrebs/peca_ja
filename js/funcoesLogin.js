function login() {
    let url = ''
}

function validaSessao() {
    event.preventDefault()

    let usuario = acesso.usuario.value
    let senha = acesso.senha.value
    let url = `../servicos/valida_sessao.php?usuario=${usuario}&senha=${senha}`

    axios.post(url)
        .then(resp => {
            console.log('Recebendo dados!');
            console.log(resp);
            if (resp) {
                if (resp.data.sucesso == true) {
                    window.location = `site_${resp.data.usuario}.html`
                } else {
                    let texto = document.getElementById('texto');
                    texto.innerHTML = resp.mensagem;
                };
            }
        })
}