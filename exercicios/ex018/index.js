// IF ( SE )
let possuiOvos = true
let itensComprados = ""

if(possuiOvos){
    // Dentro do Escopo do IF
    itensComprados = "Leite"
}

// Fora do Escopo IF
console.log("item comprado: " + itensComprados)
