function adicionar() {
    let num = window.document.getElementById('idnum')
    let regis = window.document.getElementById('numregis')
    let res = window.document.getElementById('res')

    if (num.value.length < 1 || num.value.length > 100 || num.value.length == 0) {
        res = window.alert('[ERRO] O Valor inserido não é permitido ou não existe!')
    } else {

        let escolhido = Number(num.value)

        for (let contador = 0; contador < 1; contador += 1) {

            let item = document.createElement('option')
            item.text = `O Número ${escolhido} foi guardado`

            regis.appendChild(item)
        }







    }



}