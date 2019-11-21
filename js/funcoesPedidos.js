function pedido(arrayPedido) {
    event.preventDefault()

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""

    arrayPedido.forEach(item => {

        const div = document.createElement("div")

        div.innerHTML = item.nome + item.valor
        resultado.appendChild(div)
    })
    let button = document.createElement("input")
    button.type = "submit"
    button.onclick = function() {
        $.ajax({
            type: 'POST',
            url: "../crud/crudPedidos/envia.php",
            data: {dados: JSON.stringify(arrayPedido)}
            // success: function(){alert("ok")},
            // error: function(){alert("erro")}
        });
        }
    resultado.appendChild(button)


}

function exclui() {
    event.preventDefault()
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""

    arrayPedido = []
}

function envia() {
    event.preventDefault()

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""

    let url = '../crud/crudPedidos/envia.php'
    console.log(`Conectando a $ { url }`)

    axios.post(url)
        .then(resp => {
            console.log('Recebendo dados!')
        })
        .catch(error => {
            console.log(`Erro ao conectar: \n\ n$ { error.message }`)
            console.log(error)
        });
    pedidoProdutos = []
}

function exibePedidos() {
    event.preventDefault()

    let url = '../crud/crudProdutos/search_produto.php'

    console.log(`Conectando a $ { url }`)
    let grid = document.querySelector("#grid")
    grid.innerHTML = ''

    axios.get(url)
        .then(resp => {
            console.log('Recebendo dados!')
            let i = 0
            let id = 0
            var row = document.createElement("div")
            row.setAttribute("class", "row justify-content-center mt-3")
            grid.appendChild(row)

            // console.log(resp.data)
            listaProdutos = resp.data

            listaProdutos.forEach(obj => {
                // console.log(Object.values(obj))
                if (i == 3) {
                    row = document.createElement("div")
                    row.setAttribute("class", "row justify-content-center mt-3")
                    grid.appendChild(row)
                    i = 0
                }

                let col = document.createElement("div")
                col.setAttribute("class", "card col-sm-12 col-md-3 ml-3 mr-3")
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