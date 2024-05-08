// OR ( || - Pipe ) - nosso boneco só pode sair se não estiver chovendo OU com guarda chuva
let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("Nosso personagem pode sair? " + podeSair)
