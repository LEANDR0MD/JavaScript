function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora <= 12) {
        //BOM DIA
        img.src = 'imagens/manha.png'
        document.body.style.background = 'rgb(142, 184, 243)'
    } else if (hora > 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = 'antiquewhite'
    } else {
        //BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = 'rgb(16, 13, 101)'
    }

}
