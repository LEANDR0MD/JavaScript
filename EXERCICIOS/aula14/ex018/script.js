function tabuada() {
    var num = window.document.getElementById('idnum')
    var tab = window.document.getElementById('seltab')

    var res = window.document.getElementById('res')

    if (num.value.length == 0) {

        res = window.alert('Informe algum valor!')

    } else {

        var n = Number(num.value)
        tab.innerHTML = ''

        for (var ta = 0; ta <= 10; ta += 1) {

            var item = document.createElement('option')
            item.text = `${n}x${ta}=${n * ta}`

            tab.appendChild(item)
        }

    }

}