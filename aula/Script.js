function inserir()
{
    let numero = document.getElementById("posicao").value -1
    let novo = document.getElementById("novo").value
    document.getElementsByClassName("colocado")[numero].innerHTML = novo
}