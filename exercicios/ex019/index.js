// ELSE ( SENÃO )
let possuiOvos = true
let itensComprados = ""

if(possuiOvos){
    // Dentro do Escopo do IF
    itensComprados = "Leite"
}
else{
    // Dentro do Escopo do ELSE
    console.log("passou na sessão de congelados")
    itensComprados = "Lasanha congelada"
}

// Fora do Escopo do IF e ELSE
console.log("item comprado: " + itensComprados)
