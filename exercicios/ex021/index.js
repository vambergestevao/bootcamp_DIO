// Estrutura de Decisão - Switch/Case/Break/Default
let fruta = "banana"

switch (fruta){
    // Escopo do Switch
    case 1:
        console.log("suco de laranja")
        console.log("segunda mensagem")
    break

    case "banana":
    case "morango":
        console.log("vitamina de " + fruta)
    break

    case 2:
        console.log("suco de maça")
    break

    default:
    console.log("suco genérico")
}
