let idade;
let isMaiorIdade;
let isCursandoOutraFaculdade;

function verificaPessoa(idade, isMaiorIdade, isCursandoOutraFaculdade) {
    let termo = "mais"

    if (idade >= 18) {
        console.log(`A pessoa tem ${termo} 18 anos de idade.`)
    } else {
        termo = "apenas"
        console.log(`A pessoa tem ${termo} ${idade} anos de idade.`)
    }

    if (isMaiorIdade) {
        console.log(`Eu sou MAIOR de idade.`)
    } else {
        console.log(`Eu sou MENOR de idade.`)
    }

    if (isCursandoOutraFaculdade) {
        console.log('Estou cursando a faculdade.')
    } else {
        console.log('Não estou cursando faculdade.')
    }

}

verificaPessoa(15, true, false)