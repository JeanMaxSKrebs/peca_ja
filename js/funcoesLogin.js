function login() {
    let url = ''
}

function validaSessao() {
    event.preventDefault()

    let usuario = acesso.usuario.value
    let senha = acesso.senha.value
    let url = `../servicos/autentica.php`

    const dataForm = new FormData();

    dataForm.append('usuario', usuario)
    dataForm.append('senha', senha)

    axios.post(url, dataForm)
        .then(resp => {
            console.log('Recebendo dados!');
            console.log(resp);
            if (resp) {
                if (resp.data.sucesso == true) {
                    console.log($_SESSION['usuario'])
                    window.location = `site_${resp.data.usuario}.html`
                } else {
                    let texto = document.getElementById('texto');
                    texto.innerHTML = resp.mensagem;
                };
            }
        })
}