const resultado = document.getElementById("resultado")
const attFormProduto = document.getElementById('attForm_produto')

function mostraProdutos() {
    event.preventDefault()

    let url = '../crud/crudProdutos/search.php'

    console.log(`Conectando a ${url}`)
    let tabela = document.querySelector("#tabelaProdutos")
    tabela.innerHTML = ''

    // com axios
    axios.get(url)
        .then(resp => {
            console.log('Recebendo dados!')

            let table = '<table>'
            table += '<tr><td>Produtos</td></tr>'
            table += '<tr>'
            table += '<td>Codigo</td><td>Tipo</td><td>Nome</td><td>Valor</td>'
            table += '</tr>'
            resp.data.forEach(obj => {
                console.log(obj)
                table += '<tr>'
                Object.entries(obj).map(([key, value]) => {
                    table += `<td>${value}</td>`
                });
                table += '</tr>'
            });
            tabela.innerHTML += table + '</table>'
            resultado.innerHTML = "SUCESSO"
        })
        .catch(error => {
            console.log(`Erro ao conectar:\n\n${error.message}`)
            console.log(error)
        });
}

function insertProdutosJs() {
    event.preventDefault()

    resultado.innerHTML = '' //seta a div de resultado como vazia
    let nome = insertProdutos.nome.value
    let valor = insertProdutos.valor.value
    let categoria = insertProdutos.categoria.value
    let imagem = insertProdutos.imagem.src
    console.log(imagem)
    let produtos = new Produtos(nome, valor, categoria, imagem) //instancia um novo objeto usando o construtor
    let url = '../crud/crudProdutos/insert.php'
    console.log(`Conectando a ${url}`)
    axios.post(url, JSON.stringify(produtos))
        .then(resp => {
            console.log('Recebendo dados!')
            resultado.innerHTML = "SUCESSO"
            insertProdutos.nome.value = ''
            insertProdutos.valor.value = ''
            insertProdutos.categoria.value = ''
            insertProdutos.imagem.value = ''
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error))
}

function alterProdutosJs() {
    event.preventDefault()

    let busca = alterProdutos.busca.value
    let url = `../crud/crudProdutos/search_altera.php?busca=${busca}`
    console.log(`Conectando a ${url}`)

    axios.get(url, { query: { busca } })
        .then(resp => {
            console.log('Recebendo dados!');
            alterProdutos.style.display = 'block'
            attProdutos.nome.value = resp.data.nome
            attProdutos.valor.value = resp.data.valor
            attProdutos.categoria.value = resp.data.cod_categorias
            attProdutos.imagem.src = resp.data.imagem
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error))
}

function attProdutosJs() {
    event.preventDefault()

    resultado.innerHTML = '' //seta a div de resultado como vazia
    let busca = alterProdutos.busca.value
    let nome = attProdutos.nome.value
    let valor = attProdutos.valor.value
    let categoria = attProdutos.categoria.value
    let imagem = attProdutos.imagem.src

    let produtosAtt = new Produtos(nome, valor, categoria, imagem, busca) //instancia um novo objeto usando o construtor
    let url = '../crud/crudProdutos/alter.php'
    console.log(`Conectando a ${url}`)
    axios.post(url, JSON.stringify(produtosAtt))
        .then(resp => {
            console.log('Recebendo dados!');
            resultado.innerHTML = "SUCESSO"
            attFormProduto.style.display = 'none'
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error))

}

function deleteProdutosJs() {
    event.preventDefault()

    let busca = deleteProdutos.busca.value
    let url = `../crud/crudProdutos/delete.php?busca=${busca}`
    console.log(`Conectando a ${url}`)

    axios.get(url, { query: { busca } })
        .then(resp => {
            console.log('Recebendo dados!');
            resultado.innerHTML = resp.data
            deleteProdutos.busca.value = ''
        })
        .catch(error => console.error('Erro ao tentar acessar o php:', error));
}

function insereCategoriaAdiciona() {
    event.preventDefault()

    let url = '../crud/crudCategorias/search.php'
    console.log(`Conectando a ${url}`)

    axios.put(url)
        .then(resp => {
            console.log('Recebendo dados!')
            resp.data.forEach(obj => {
                console.log(Object.values(obj))
                let select = document.querySelector("#selectAdiciona")
                let option = document.createElement("option")
                let textoOption = document.createTextNode(`${Object.values(obj)[0]} | ${Object.values(obj)[1]}`)
                option.value = `${Object.values(obj)[0]}`
                option.appendChild(textoOption)
                select.appendChild(option)
            });
        })
        .catch(error => {
            console.log(`Erro ao conectar:\n\n${error.message}`)
            console.log(error)
        });
}

function insereCategoriaAltera() {
    event.preventDefault()

    let url = '../crud/crudCategorias/search.php'
    console.log(`Conectando a ${url}`)

    axios.get(url)
        .then(resp => {
            console.log('Recebendo dados!')
            resp.data.forEach(obj => {
                console.log(Object.values(obj))
                let select = document.querySelector("#selectAltera")
                let option = document.createElement("option")
                let textoOption = document.createTextNode(`${Object.values(obj)[0]} | ${Object.values(obj)[1]}`)
                option.value = `${Object.values(obj)[0]}`
                option.appendChild(textoOption)
                select.appendChild(option)
            });
        })
        .catch(error => {
            console.log(`Erro ao conectar:\n\n${error.message}`)
            console.log(error)
        });
}
let listaProdutos = []


// if()
let arrayPedido = []

function exibirProdutos() {
    event.preventDefault()

    let url = '../crud/crudProdutos/search_produto.php'

    console.log(`Conectando a ${url}`)
    let grid = document.querySelector("#grid")
    grid.innerHTML = ''

    axios.get(url)
        .then(resp => {
            console.log('Recebendo dados!')
            let i = 0
            let id = 0
            var row = document.createElement("div")
            row.setAttribute("class", "row justify-content-center")
            grid.appendChild(row)

            // console.log(resp.data)
            listaProdutos = resp.data

            listaProdutos.forEach(obj => {
                // console.log(Object.values(obj))
                if (i == 3) {
                    row = document.createElement("div")
                    row.setAttribute("class", "row justify-content-center")
                    grid.appendChild(row)
                    i = 0
                }

                let col = document.createElement("div")
                col.setAttribute("class", "card col-sm-12 col-md-3 m-3")
                col.style.backgroundColor = "#ffcf3e";
                col.style.padding = "10px"

                let div = document.createElement("div")
                div.setAttribute("id", id)

                let nome = document.createElement("div")
                nome.textContent = `${Object.values(obj)[0]}`
                nome.style.fontWeight = "bolder"

                let valor = document.createElement("div")
                valor.textContent = `${Object.values(obj)[1]}`
                valor.style.fontWeight = "bolder"

                let imagem = document.createElement("img")
                imagem.src = Object.values(obj)[2]
                imagem.style.borderRadius = "200px"
                imagem.width = 100
                imagem.height = 100

                let button = document.createElement("button")
                button.textContent = "📋"
                button.setAttribute("class", "btn btn-block btn-outline-light")
                button.onclick = function() {
                    // console.log(arrayPedido)
                    arrayPedido.push(obj)
                    pedido(arrayPedido)
                }

                id++
                i++
                row.appendChild(col)
                col.appendChild(div)
                div.appendChild(nome)
                div.appendChild(imagem)
                div.appendChild(valor)
                div.appendChild(button)
            })
        })
        .catch(error => {
            console.log(`Erro ao conectar:\n\n${error.message}`)
            console.log(error)
        });
}

//construtor usado no insert
var Produtos = function(nome, valor, categoria, imagem, busca) {
    this.busca = busca;
    this.nome = nome;
    this.valor = valor;
    this.categoria = categoria;
    this.imagem = imagem;
}