function avisar(){
    alert("Opa, Disparei!")
}

let botao = document.querySelector("#botao")

botao.addEventListener("mouseover", () => {
    avisar()
})