const attFormFuncionario = document.getElementById('attForm_funcionario');


function mostraFuncionarios() {
    let url = '../crud/crudFuncionarios/search.php';

    console.log(`Conectando a ${url}`)
    let tabela = document.querySelector("#tabelaFuncionarios");
    tabela.innerHTML = '';

    // com axios
    axios.get(url)
        .then(resp => {
            console.log('Recebendo dados!');

            let table = '<table>'
            table += '<tr><td>Funcionários</td></tr>'
            table += '<tr>'
            table += '<td>Codigo</td><td>Nome</td><td>Salário</td><td>Tipo</td><td>Endereço</td><td>Cpf</td><td>Login</td><td>Senha</td>'
            table += '</tr>'
            resp.data.forEach(obj => {
                console.log(obj)
                table += '<tr>'
                Object.entries(obj).map(([key, value]) => {
                    table += `<td>${value}</td>`
                });
                table += '</tr>'
            });
            tabela.innerHTML += table + '</table>';
            resultado.innerHTML = "SUCESSO"
        })
        .catch(error => {
            console.log(`Erro ao conectar:\n\n${error.message}`)
            console.log(error)
        });
}

function insertFuncionariosJs() {
    event.preventDefault()

    resultado.innerHTML = '' //seta a div de resultado como vazia
    let nome = insertFuncionarios.nome.value
    let cpf = insertFuncionarios.cpf.value
    let salario = insertFuncionarios.salario.value
    let tipo = insertFuncionarios.tipo.value
    let endereco = insertFuncionarios.endereco.value
    let login = insertFuncionarios.login.value
    let senha = insertFuncionarios.senha.value
    let funcionarios = new Funcionarios(nome, cpf, salario, tipo, endereco, login, senha) //instancia um novo objeto usando o construtor
    let url = '../crud/crudFuncionarios/insert.php'
    axios.post(url, JSON.stringify(funcionarios))
        .then(resp => {
            console.log('Recebendo dados!')
            resultado.innerHTML = "SUCESSO"
            insertFuncionarios.nome.value = ''
            insertFuncionarios.cpf.value = ''
            insertFuncionarios.salario.value = ''
            insertFuncionarios.tipo.value = ''
            insertFuncionarios.endereco.value = ''
            insertFuncionarios.login.value = ''
            insertFuncionarios.senha.value = ''
        })

    .catch(error => console.error('Erro ao tentar acessar o php:', error))
}

function alterFuncionariosJs() {
    event.preventDefault()

    let busca = alterFuncionarios.busca.value
    let url = `../crud/crudFuncionarios/search_altera.php?busca=${busca}`
    console.log(`Conectando a ${url}`)
    axios.get(url, { query: { busca } })
        .then(resp => {
            console.log('Recebendo dados!');
            alterFuncionarios.style.display = 'block'
            attFuncionarios.nome.value = resp.data.nome
            attFuncionarios.cpf.value = resp.data.cpf
            attFuncionarios.salario.value = resp.data.salario
            attFuncionarios.tipo.value = resp.data.tipo
            attFuncionarios.endereco.value = resp.data.endereco
            attFuncionarios.login.value = resp.data.login
            attFuncionarios.senha.value = resp.data.senha

            alterFuncionarios.busca.value = ''
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));

}

function attFuncionariosJs() {
    event.preventDefault();

    resultado.innerHTML = ''; //seta a div de resultado como vazia
    let busca = alterFuncionarios.busca.value
    let nome = attFuncionarios.nome.value
    let cpf = attFuncionarios.cpf.value
    let salario = attFuncionarios.salario.value
    let tipo = attFuncionarios.tipo.value
    let endereco = attFuncionarios.endereco.value
    let login = attFuncionarios.login.value
    let senha = attFuncionarios.senha.value

    let funcionariosAtt = new Funcionarios(nome, cpf, salario, tipo, endereco, login, senha, busca); //instancia um novo objeto usando o construtor
    let url = '../crud/crudFuncionarios/alter.php';
    console.log(`Conectando a ${url}`)
    axios.post(url, JSON.stringify(funcionariosAtt))
        .then(resp => {
            console.log('Recebendo dados!')
            resultado.innerHTML = "SUCESSO"
            attFormCategoria.style.display = 'none'
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));

}

function deleteFuncionariosJs() {
    event.preventDefault();

    let busca = deleteFuncionarios.busca.value;
    let url = `../crud/crudFuncionarios/delete.php?busca=${busca}`;
    console.log(`Conectando a ${url}`)

    axios.get(url, { query: { busca } })
        .then(resp => {
            console.log('Recebendo dados!');
            resultado.innerHTML = resp.data
            deleteFuncionarios.busca.value = ''
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));
}
//construtor usado no insert
var Funcionarios = function(nome, cpf, salario, tipo, endereco, login, senha, busca) {
    this.busca = busca;
    this.nome = nome;
    this.cpf = cpf;
    this.salario = salario;
    this.tipo = tipo;
    this.endereco = endereco
    this.login = login
    this.senha = senha
}