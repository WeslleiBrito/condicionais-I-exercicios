const nacionalidade = prompt('Informe sua nacionalidade')

if ('brasileira' === nacionalidade.toLowerCase()) {
    console.log('Nascido(a) no Brasil')
} else if ('argentina' === nacionalidade.toLocaleLowerCase()) {
    console.log('Nascido(a) na Argentina')
} else if ('uruguai' === nacionalidade.toLocaleLowerCase()) {
    console.log('Nascido(a) no Uruguai')
} else if ('chilena' === nacionalidade.toLowerCase()) {
    console.log('Nascido(a) no Chile')
} else if ('colombiana' === nacionalidade.toLowerCase()) {
    console.log('Nascido(a) na Colombia')
}