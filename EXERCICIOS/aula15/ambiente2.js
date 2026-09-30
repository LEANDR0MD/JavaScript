let valores = [8, 1, 7, 4, 2, 9]
//console.lot(valores[0])
/*for (let pos = 0; pos < valores.length; pos++) {

    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}
*/
valores.sort() // deixa os valores em ordem crescente

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}