function pedido(arrayPedido) {
    event.preventDefault()

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""

    arrayPedido.forEach(item => {

        const div = document.createElement("div")
        div.style.backgroundColor = "#8FBC8F"
        div.style.border = "solid 1px rgba(0,0,0,0.125)"
        div.style.margin = "0 20vw"
        div.innerHTML = item.nome + item.valor
        resultado.appendChild(div)
    })
    let envia = document.createElement("input")
    envia.type = "submit"
    envia.value = "Enviar Pedido"
    envia.setAttribute('class', 'btn btn-success')
    envia.onclick = function() {
        teste()
    }
    let apaga = document.createElement("input")
    
    apaga.value = "Apagar Pedido"
    apaga.type = "submit"
    apaga.setAttribute("class", "btn btn-danger mr-1")
    apaga.onclick = function() {
        exclui()
    }
        
    resultado.appendChild(apaga)
    resultado.appendChild(envia)
}
function teste(){

    let url = '../crud/crudPedidos/envia.php'

    console.log(`Conectando a ${url}`)
        
    var formData = new FormData();
    
    formData = JSON.stringify(arrayPedido)

    axios.post(url, formData)
    .then(resp => {

    })
}
function exclui(){
    event.preventDefault()
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""

    arrayPedido = []
}

function exibePedidos() {
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
                col.style.backgroundColor = "#8FBC8F";
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
                imagem.width = 100
                imagem.height = 100

                let button = document.createElement("button")
                button.textContent = "📋"
                button.setAttribute("class", "btn btn-block btn-outline-light")
                button.setAttribute("onclick", `pedido(${id})`)

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
//site_funcionario
let listaPedidos = []

function mostraPedidos(){

    let url = '../crud/crudPedidos/busca_pedidos.php'

    console.log(`Conectando a ${url}`)

    let grid = document.querySelector("#grid")
    grid.innerHTML = ''

    axios.get(url)
        .then(resp => {
            console.log('Recebendo dados!')

            let listaPedidos = resp.data
            
            // console.log(resp.data)

            // console.log(listaPedidos)

            listaPedidos.forEach(obj => {
                var row = document.createElement("div")
                row.style.backgroundColor = "#8FBC8F";
                // row.style.backgroundColor = "#FFE4C4";
                row.setAttribute("class", "row")
                row.style.border = "solid 1px"
                row.style.padding = "5px"
                row.style.margin = "3px 10vh"
                row.style.border = "solid 1px rgb(0,0,0,0.125)"
                row.style.borderRadius = ".25rem"
                grid.appendChild(row)
                
                Object.entries(obj).forEach(([key, value])=>{
                    let col = document.createElement("div")
                    col.setAttribute("class", "col")
                    col.textContent = key + ": " + value
                    // console.log(key + " " + value)
                    row.appendChild(col)

                })
                
                let info = document.createElement("button")
                info.textContent = "ℹ️"
                info.setAttribute("class", "btn btn-light")
                info.onclick = function () {
                    let modalPedido = modalBuscaProdutos(obj)
                    let body = document.querySelector('body')
                    body.appendChild(modalPedido)
                }
                let col = document.createElement("div")
                col.setAttribute("class", "col-md-12 col-lg")
                col.appendChild(info)
                row.appendChild(col)
            })
        })
        .catch(error => {
            console.log(`Erro ao conectar:\n\n${error.message}`)
            console.log(error)
        });


}
let produtosDoPedido = []

function buscaProdutos(codigoPedido)
{
    const dataForm = new FormData();

    dataForm.append('codigo', codigoPedido)

    let url = '../crud/crudPedidos/search_pedido.php'

    console.log(`Conectando a ${url}`)
    let grid = document.createElement("grid")
    grid.innerHTML = ''

    axios.post(url, dataForm)
        .then(resp => {
            console.log('Recebendo dados!')
        
            produtosDoPedido = resp.data
            // console.log(produtosDoPedido)
            produtosDoPedido.forEach(obj => {
                var row = document.createElement("div")
                row.style.backgroundColor = "#8FBC8F";
                row.setAttribute("class", "row")
                row.style.border = "solid 1px"
                row.style.padding = "5px"
                row.style.margin = "5px"
                grid.appendChild(row)
                
                Object.entries(obj).forEach(([key, value])=>{
                    let col = document.createElement("div")
                    col.setAttribute("class", "col")
                    col.textContent = key + ": " + value
                    // console.log(key + " " + value)
                    row.appendChild(col)
                })
            })
        })
        return grid
}
function modalBuscaProdutos(obj){
    let div = document.createElement("div")
    div.style.position = "fixed"
    div.style.top = "0px"
    div.style.backgroundColor = "transparent"
    div.style.width = "100vw"
    div.style.height = "100vh"
    
    let conteudo = document.createElement("div")
    conteudo.setAttribute("class", "container")
    conteudo.style.marginTop = "25vh"
    conteudo.style.backgroundColor = "#ed9a3e"
    conteudo.style.width = "50vw"
    conteudo.style.overflowY = "scroll"
    conteudo.style.height = "50vh"

    let produtos = buscaProdutos(Object.values(obj)[0])
    
    let sair = document.createElement("button")
    sair.textContent = "Fechar"
    sair.setAttribute("class", "btn btn-danger")
    sair.onclick = function(){
        div.style.display = "none"
    }

    let aceita = document.createElement("button")
    aceita.textContent = "Pegar Pedido"
    aceita.setAttribute("class", "btn btn-success")
    aceita.onclick = function(){
        div.style.display = "none"
        updatepedidos(Object.values(obj)[0])//é o código do pedido
        mostraPedidos()
    }


    conteudo.appendChild(sair)
    conteudo.appendChild(produtos)
    conteudo.appendChild(aceita)
    div.appendChild(conteudo)
    return div;

}
function updatepedidos(codigoPedido){
    const dataForm = new FormData();

    dataForm.append('codigo', codigoPedido)

    let url = '../crud/crudPedidos/insert_funcionario.php'

    console.log(`Conectando a ${url}`)

    axios.post(url, dataForm)
    .then(resp => {
        console.log('Recebendo dados!')

    })
}
