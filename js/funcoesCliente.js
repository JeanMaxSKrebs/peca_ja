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
        })
    .catch(error => console.error('Erro ao tentar acessar o php:', error));
}

function imprimirJSON() {
    resultado.innerHTML = '';
    let url = '../aplicacao/search.php';

    console.log(`Conectando a ${url}`)

    let Clientes = document.getElementById('Cliente')
        // com axios
    axios.get(url)
        .then(resp => {
            console.log('Recebendo dados!');

            let table = '<table>'
            resp.data.forEach(obj => {
                console.log(obj)
                table += '<tr>'
                Object.entries(obj).map(([key, value]) => {
                    table += `<td>${value}</td>`
                });
                table += '</tr>'
            });
            Clientes.innerHTML += table + '</table>';
        })
        .catch(error => {
            console.log(`Erro ao conectar:\n\n${error.message}`)
            console.log(error)
        });
}


function buscaCliente_nomeJs() {
    resultado.innerHTML = '';
    let busca_nome = document.getElementById('busca_nome');
    let busca = document.getElementById('nome_busca_cliente').value;
    let url = `../aplicacao/search_nome.php?busca=${busca}`;
    console.log(`Conectando a ${url}`)

    axios.get(url, { query: { busca } })
        .then(resp => {
            console.log('Recebendo dados!');

            let table = '<table>'
            resp.data.forEach(obj => {
                table += '<tr>'
                Object.entries(obj).map(([key, value]) => {
                    table += `<td>${value}</td>`
                });
                table += '</tr>'
            });
            busca_nome.innerHTML += table + '</table>';
        })
        .catch(error => {
            console.log(`Erro ao conectar:\n\n${error.message}`)
            console.log(error)
        });
    event.preventDefault();
}

function alterClienteJs() {
    event.preventDefault();

    let busca = alter.busca.value;
    let url = `../aplicacao/search_altera.php?busca=${busca}`;
    console.log(`Conectando a ${url}`)

    axios.get(url, { query: { busca } })
        .then(resp => {
            attForm.style.display = 'block';
            att.nome.value = resp.data.nome;
            att.cpf.value = resp.data.cpf;
            att.login.value = resp.data.login;
            att.senha.value = resp.data.senha;
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));

}

function attClienteJs() {
    event.preventDefault();

    resultado.innerHTML = ''; //seta a div de resultado como vazia
    let busca = alter.busca.value;
    let nome = att.nome.value;
    let cpf = att.cpf.value;
    let login = att.login.value;
    let senha = att.senha.value;
    let clientesAtt = new Clientes(nome, cpf, login, senha, busca); //instancia um novo objeto usando o construtor
    let url = '../aplicacao/alter.php';
    axios.post(url, JSON.stringify(clientesAtt))
        .then(resp => {
            resultado.innerHTML = resp.data;
            attForm.style.display = 'none';
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
var Clientes = function(nome, cpf, login, senha, busca) {
    this.busca = busca;
    this.nome = nome;
    this.cpf = cpf;
    this.login = login;
    this.senha = senha;
}