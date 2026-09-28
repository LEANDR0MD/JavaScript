function contador() {

    var inicio = window.document.getElementById('idinicio')
    var fim = window.document.getElementById('idfim')
    var passo = window.document.getElementById('idpasso')

    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        res.innerHTML = 'Impossível contar!'

    } else {
        var ini = Number(inicio.value)
        var fi = Number(fim.value)
        var pas = Number(passo.value)

        if (pas <= 0) {
            window.alert('Passo inválido! Considerando passo 1')

            pas = 1
        }

        if (ini < fi) {
            for (var i = ini; i <= fi; i += pas) {
                res.innerHTML += `${i} \u{1F449}`/* ATENÇÃO NESTA LINHA, DE CÓDIGO, PARA O CÓDIGO MOSTRAR A REPETIÇÃO NO SITE É PRECISO COLOCAR O += QUE NESSE CASO VAI CONCATENAR UM LOOP COM O OUTRO SE NÃO SO SERA MOSTRADO A ULTIMA RESPOSTA. */
            }

        } else {
            for (var i = fi; i <= ini; i += pas)
                res.innerHTML += `${i} \u{1F449}`

        }
        res.innerHTML += `\u{1F3C1}`

    }






}
