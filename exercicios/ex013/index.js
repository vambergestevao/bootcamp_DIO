// Igual e Diferente
// = é atrbuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo - (Específico do JavaScript)
// !== é diferente?
let numeros = "12"
console.log(numeros == 12)

let numero = "12"
console.log(numero === 12)

let marca = "Apple"
console.log(marca !== "Apple")

let marcas = "Apple"
console.log(marcas !== "Samsung")

// Guardar o valor em uma variável de resultado TRUE?FALSE (Booleana)
let empresa = "Apple"
let resultado = empresa !== "Samsung"
console.log(resultado)

let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado
console.log("O usuário está barrado ? " + ehCPFBloqueado)

let CPFPermitido = "222.555.333-02"
let CPFDoUsuario = "222.555.333-02"
let ehBloqueado = CPFDoUsuario !== CPFPermitido
console.log("É um usuário invalido ? " + ehBloqueado)
