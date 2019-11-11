const attFormCategoria = document.getElementById('attForm_categoria');

function mostraCategorias() {
    event.preventDefault();
    let url = '../crud/crudCategorias/search.php';

    console.log(`Conectando a ${url}`)
    let tabela = document.querySelector("#tabelaCategorias");
    tabela.innerHTML = '';

    // com axios
    axios.get(url)
        .then(resp => {
            console.log('Recebendo dados!');

            let table = '<table>'
            table += '<tr><td>Categorias</td></tr>'
            table += '<tr>'
            table += '<td>Codigo</td><td>Tipo</td>'
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

function insertCategoriasJs() {
    event.preventDefault();

    resultado.innerHTML = ''; //seta a div de resultado como vazia
    let tipo = insertCategorias.tipo.value;

    let categorias = new Categorias(tipo); //instancia um novo objeto usando o construtor
    let url = '../crud/crudCategorias/insert.php';
    axios.post(url, JSON.stringify(categorias))
        .then(resp => {
            console.log('Recebendo dados!')
            resultado.innerHTML = "SUCESSO"
            insertCategorias.tipo.value = ''
        })

    .catch(error => console.error('Erro ao tentar acessar o php:', error));
}

function alterCategoriasJs() {
    event.preventDefault();

    let busca = alterCategorias.busca.value;
    let url = `../crud/crudCategorias/search_altera.php?busca=${busca}`;
    console.log(`Conectando a ${url}`)

    axios.get(url, { query: { busca } })
        .then(resp => {
            console.log('Recebendo dados!');
            alterCategorias.style.display = 'block'
            attCategorias.nome.value = resp.data.tipo
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));

}

function attCategoriasJs() {
    event.preventDefault()
    resultado.innerHTML = '' //seta a div de resultado como vazia
    let busca = alterCategorias.busca.value
    let tipo = attCategorias.nome.value

    let categoriasAtt = new Categorias(tipo, busca) //instancia um novo objeto usando o construtor
    let url = '../crud/crudCategorias/alter.php'
    console.log(`Conectando a ${url}`)
    axios.post(url, JSON.stringify(categoriasAtt))
        .then(resp => {
            console.log('Recebendo dados!')
            resultado.innerHTML = "SUCESSO"
            attFormCategoria.style.display = 'none'
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error))

}

function deleteCategoriasJs() {
    event.preventDefault();

    let busca = deleteCategorias.busca.value;
    let url = `../crud/crudCategorias/delete.php?busca=${busca}`;
    console.log(`Conectando a ${url}`)

    axios.get(url, { query: { busca } })
        .then(resp => {
            console.log('Recebendo dados!');
            resultado.innerHTML = "SUCESSO"
            deleteCategorias.busca.value = ''
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));
}


var Categorias = function(tipo, busca) {
    this.busca = busca;
    this.tipo = tipo;

}