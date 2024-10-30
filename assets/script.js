let idade = 90 // number
let nome = "Lucas" // string
let logago = true // tipo boolean

// array e objetos

let ingredientes = ["farinha", "Agua", "Corante", "sal"] 
let personagem = {
    nome:"Lucas",
    altura:1.64,
    idade:28,
    cor: "Moreno",
    nivel:10,
    forca: 100,
    vida:30,
    mana:12
}

// INPUT
// PROCESSA
// OUTPUT

function somar(a, b){
    let resultado = a + b;
    return resultado
}

let somar2 = (a, b) => {
    let resultado = a + b;
    return resultado
}

let x = somar(15, 5)
let y = somar2(30, 12) 
console.log(x)
console.log(y)


