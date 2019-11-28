function autentica() {
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
            if (resp) {
                if (resp.data.sucesso == true) {
                    window.location = `site_${resp.data.usuario}.html`
                }
                else
                {
                    if(resp.data.null == true) {
                        window.location.href = `../estrutura/cadastro.html`
                    }
                    else
                    {
                        window.location.href = `../estrutura/index.html`
                    }
                }
            }
        })
}
function validaSessao(){

    let url = `../servicos/valida_sessao.php`

    axios.get(url)
    .then(resp => {
        console.log('Recebendo dados!');
        if (resp) {
            if (resp.data.sucesso == true) {
                
            }
            else
            {
                window.location.href = `../estrutura/index.html`
            }
        }
    })
}
function validaSessaoCliente(){

    let url = `../servicos/valida_sessao_cliente.php`

    axios.get(url)
    .then(resp => {
        console.log('Recebendo dados!');
        if (resp) {
            if (resp.data.sucesso == true) {
                
            }
            else
            {
                window.location.href = `../estrutura/index.html`
            }
        }
    })
}
function validaSessaoAdmin(){

    let url = `../servicos/valida_sessao_admin.php`

    axios.get(url)
    .then(resp => {
        console.log('Recebendo dados!');
        if (resp) {
            if (resp.data.sucesso == true) {
                
            }
            else
            {
                window.location.href = `../estrutura/index.html`
            }
        }
    })
}
function sairSessao(){

    let url = `../servicos/sair_sessao.php`

    axios.get(url)
    .then(resp=>{
        console.log('Recebendo dados!');
        if(resp){
           if(resp.data.sucesso==true){
                window.location.href = `../estrutura/index.html`
           }
        }
    })
}