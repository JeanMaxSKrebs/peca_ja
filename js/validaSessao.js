function validaSessao(){

    let url = `../servicos/valida_sessao.php`

    axios.get(url)
    .then(resp => {
        console.log('Recebendo dados!');
        if (resp) {
            if (!resp.data.sucesso)
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
            if (!resp.data.sucesso)
            {
                window.location.href = `../estrutura/index.html`
            }
        }
    })
}


function validaSessaoFuncionario(){

    let url = `../servicos/valida_sessao_funcionario.php`

    axios.get(url)
    .then(resp => {
        console.log('Recebendo dados!');
        if (resp) {
            if (!resp.data.sucesso)
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
            if (!resp.data.sucesso)
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