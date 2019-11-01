const resultado = document.getElementById("resultado");
const attFormProduto = document.getElementById('attForm_produto');

function mostraProdutos() {
    event.preventDefault();

    let url = '../crud/crudProdutos/search.php';

    console.log(`Conectando a ${url}`)
    let tabela = document.querySelector("#tabelaProdutos");
    tabela.innerHTML = '';

    // com axios
    axios.get(url)
        .then(resp => {
            console.log('Recebendo dados!');

            let table = '<table>'
            table += '<tr><td>Produtos</td></tr>'
            table += '<tr>'
            table += '<td>Codigo</td><td>Tipo</td><td>Nome</td><td>Valor</td><td>Desconto</td>'
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

function buscaProdutos_nomeJs() {
    resultado.innerHTML = '';
    let busca_nome = document.getElementById('busca_nome');
    let busca = document.getElementById('nome_busca_produto').value;
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

function insertProdutosJs() {
    event.preventDefault();

    resultado.innerHTML = ''; //seta a div de resultado como vazia
    let nome = insert.nome.value;
    let valor = insert.valor.value;
    let desconto = insert.desconto.value;
    let categoria = insert.categoria.value;
    let produtos = new Produtos(nome, valor, desconto, categoria); //instancia um novo objeto usando o construtor
    let url = '../crud/crudProdutos/insert.php';
    axios.post(url, JSON.stringify(produtos))
        .then(resp => {
            console.log(resp)
            console.log(resp.data)
            resultado.innerHTML = resp.data;
        })

    .catch(error => console.error('Erro ao tentar acessar o php:', error));
}

function alterProdutosJs() {
    event.preventDefault();

    let busca = alter.busca.value;
    let url = `../aplicacao/search_altera.php?busca=${busca}`;
    console.log(`Conectando a ${url}`)

    axios.get(url, { query: { busca } })
        .then(resp => {
            alter.style.display = 'block';
            att.nome.value = resp.data.nome;
            att.valor.value = resp.data.valor;
            att.desconto.value = resp.data.desconto;
            att.categoria.value = resp.data.categoria;
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));

}

function attProdutosJs() {
    event.preventDefault();

    resultado.innerHTML = ''; //seta a div de resultado como vazia
    let busca = alter.busca.value;
    let nome = att.nome.value;
    let valor = att.valor.value;
    let desconto = att.desconto.value;
    let categoria = att.categoria.value;
    let produtosAtt = new Produtos(nome, valor, desconto, categoria, busca); //instancia um novo objeto usando o construtor
    let url = '../aplicacao/alter.php';
    axios.post(url, JSON.stringify(produtosAtt))
        .then(resp => {
            resultado.innerHTML = resp.data;
            attFormProduto.style.display = 'none';
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));

}

function deleteProdutosJs() {
    event.preventDefault();

    let busca = delet.busca.value;
    let url = `../aplicacao/delete.php?busca=${busca}`;
    console.log(`Conectando a ${url}`)

    axios.get(url, { query: { busca } })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));
}

//construtor usado no insert
var Produtos = function(nome, valor, desconto, categoria, busca) {
    this.busca = busca;
    this.nome = nome;
    this.valor = valor;
    this.desconto = desconto;
    this.categoria = categoria;
}