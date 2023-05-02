//console.log("olá mundo");

// let nome = "Gabriel"
// const PI = 3.14

// console.log(nome)
// console.log(PI)

const pessoa = {
    nome: "Gabriel",
    idade: 22
}

if(pessoa.idade <= 0){
    console.log("Você ainda não nasceu")
}
else if(pessoa.idade >= 18){
    console.log(`A pessoa de nome ${pessoa.nome} é maior de idade e tem ${pessoa.idade} anos.`)
}
else{
    console.log("Menor de idade")
}