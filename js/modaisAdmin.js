// modais funcionarios

function mostra_adiciona_funcionario() {
    let add = document.querySelector("#add_func")
    add.style.display = "block"
    let alter = document.querySelector("#alter_func")
    alter.style.display = "none"
    let delet = document.querySelector("#delete_func")
    delet.style.display = "none"
}

function fecha_adiciona_funcionario() {
    let add = document.querySelector("#add_func")

    add.style.display = "none"
}

function mostra_altera_funcionario() {
    let alter = document.querySelector("#alter_func")
    alter.style.display = "block"
    let add = document.querySelector("#add_func")
    add.style.display = "none"
    let delet = document.querySelector("#delete_func")
    delet.style.display = "none"
}

function fecha_altera_funcionario() {
    let alter = document.querySelector("#alter_func")

    alter.style.display = "none"
    let att = document.querySelector("#attForm_funcionario")

    att.style.display = "none"
}

function mostra_deleta_funcionario() {
    let delet = document.querySelector("#delete_func")
    delet.style.display = "block"
    let add = document.querySelector("#add_func")
    add.style.display = "none"
    let alter = document.querySelector("#alter_func")
    alter.style.display = "none"
}

function fecha_deleta_funcionario() {
    let delet = document.querySelector("#delete_func")

    delet.style.display = "none"
}

// modais produtos

function mostra_adiciona_produto() {
    let add = document.querySelector("#add_prod")
    add.style.display = "block"
    let alter = document.querySelector("#alter_prod")
    alter.style.display = "none"
    let delet = document.querySelector("#delete_prod")
    delet.style.display = "none"
}

function fecha_adiciona_produto() {
    let add = document.querySelector("#add_prod")

    add.style.display = "none"
}

function mostra_altera_produto() {
    let alter = document.querySelector("#alter_prod")
    alter.style.display = "block"
    let add = document.querySelector("#add_prod")
    add.style.display = "none"
    let delet = document.querySelector("#delete_prod")
    delet.style.display = "none"
}

function fecha_altera_produto() {
    let alter = document.querySelector("#alter_prod")

    alter.style.display = "none"
    let att = document.querySelector("#attForm_produto")

    att.style.display = "none"
}

function mostra_deleta_produto() {
    let delet = document.querySelector("#delete_prod")
    delet.style.display = "block"
    let add = document.querySelector("#add_prod")
    add.style.display = "none"
    let alter = document.querySelector("#alter_prod")
    alter.style.display = "none"
}

function fecha_deleta_produto() {
    let delet = document.querySelector("#delete_prod")

    delet.style.display = "none"
}
// modais categorias 

function mostra_adiciona_categoria() {
    let add = document.querySelector("#add_categ")
    add.style.display = "block"
    let alter = document.querySelector("#alter_categ")
    alter.style.display = "none"
    let delet = document.querySelector("#delete_categ")
    delet.style.display = "none"
}

function fecha_adiciona_categoria() {
    let add = document.querySelector("#add_categ")

    add.style.display = "none"
}

function mostra_altera_categoria() {
    let alter = document.querySelector("#alter_categ")
    alter.style.display = "block"
    let add = document.querySelector("#add_categ")
    add.style.display = "none"
    let delet = document.querySelector("#delete_categ")
    delet.style.display = "none"
}

function fecha_altera_categoria() {
    let alter = document.querySelector("#alter_categ")

    alter.style.display = "none"
    let att = document.querySelector("#attForm_categoria")

    att.style.display = "none"
}

function mostra_deleta_categoria() {
    let delet = document.querySelector("#delete_categ")
    delet.style.display = "block"
    let add = document.querySelector("#add_categ")
    add.style.display = "none"
    let alter = document.querySelector("#alter_categ")
    alter.style.display = "none"
}

function fecha_deleta_categoria() {
    let delet = document.querySelector("#delete_categ")

    delet.style.display = "none"
}

// mostra atts

function mostra_att_produto() {
    let attForm = document.querySelector("#attForm_produto")

    attForm.style.display = "block"
}

function mostra_att_categoria() {
    let attForm = document.querySelector("#attForm_categoria")

    attForm.style.display = "block"
}

function mostra_att_funcionario() {
    let attForm = document.querySelector("#attForm_funcionario")

    attForm.style.display = "block"
}