function contador() {

    var inicio = window.document.getElementById('idinicio')
    var fim = window.document.getElementById('idfim')
    var passo = window.document.getElementById('idpasso')
    var res = window.document.getElementById('res')

    var ini = Number(inicio.value)
    var fi = Number(fim.value)
    var pas = Number(passo.value)

    for (var i = ini; i <= fi; i += pas) {

        res.innerHTML = `teste ${i} ${pas}`

    }




}
