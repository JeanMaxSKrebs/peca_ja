const attForm = document.getElementById('attForm');

function insertCliente() {
    event.preventDefault();

    let nome = cadastro.nome.value;
    let cpf = cadastro.cpf.value;
    let login = cadastro.login.value;
    let senha = cadastro.senha.value;
    let clientes = new Clientes(nome, cpf, login, senha); //instancia um novo objeto usando o construtor
    let url = '../crud/crudClientes/insert.php';
    axios.post(url, JSON.stringify(clientes))
        .then(resp => {
            console.log(resp)
            console.log(resp.data)
            window.location.href = `../estrutura/index.html`
        })
    .catch(error => console.error('Erro ao tentar acessar o php:', error));
}

function pegaSessao() {
    resultado.innerHTML = ''
    let url = `../crud/crudClientes/pega_sessao.php`
    console.log(`Conectando a ${url}`)

    axios.get(url)
        .then(resp => {
            console.log('Recebendo dados!')
                console.log(resp)
                att.nome.value = resp.data.nome;
                att.login.value = resp.data.login;
            })
        .catch(error => {
            console.log(`Erro ao conectar:\n\n${error.message}`)
            console.log(error)
        });
    event.preventDefault();
}

function attClienteJs() {
    event.preventDefault()

    let nome = att.nome.value;
    let login = att.login.value;
    let senha = att.senha.value;
    let clientesAtt = new Clientes(nome, login, senha);
    let url = '../crud/crudClientes/alter_cliente.php';
    axios.post(url, JSON.stringify(clientesAtt))
        .then(resp => {
            alert('sucesso')
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));

}


function deleteClienteJs() {
    event.preventDefault();

    let busca = deletar.busca.value;
    let url = `../aplicacao/delete.php?busca=${busca}`;
    console.log(`Conectando a ${url}`)

    axios.get(url, { query: { busca } })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));
}

//construtor usado no insert
var Clientes = function(nome, login, senha) {
    this.nome = nome;
    this.login = login;
    this.senha = senha;

}

// MODAIS

function perfil(){
    let perfilBG = document.querySelector('#perfilBG')
    perfilBG.style.display = 'block'
    let corBG = document.querySelector('#modalPerfil')
    corBG.setAttribute("class", "card")
}

function fechaPerfil(){
    let perfilBG = document.querySelector('#perfilBG')
    perfilBG.style.display = 'none'
}