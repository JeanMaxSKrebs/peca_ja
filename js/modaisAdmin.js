// modais funcionarios

function mostra_add_funcionario() {

    var el = document.querySelector("#add_func");
    el.style.display = "block";
}

function fecha_add_funcionario() {
    var el = document.querySelector("#add_func");

    el.style.display = "none";
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