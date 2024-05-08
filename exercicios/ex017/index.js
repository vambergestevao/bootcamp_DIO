// NOT ( ! ) - nega uma afirmação
let tempo = "chuva"
let resultado = tempo === "chuva"
console.log(!!resultado)

// NOT também pode mudar a polaridade de uma variável booleana
let tempo1 = "chuva"
let horario = 8
let resultado1 = !((tempo1 !== "chuva") && (horario > 6))
console.log(resultado1)
