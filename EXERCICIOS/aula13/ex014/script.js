function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = window.document.getElementById('ididade')
    var res = window.document.getElementById('res')

    if (nascimento.value.length == 0 || nascimento.value > ano) {
        window.alert('[ERRO] informe uma data valida!')
    } else {

        var sexo = window.document.getElementsByName('nsexo')
        var idade = ano - Number(nascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/hcriaca.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/mcrianca.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Resultado ${genero} com ${idade} anos`
        res.appendChild(img)




    }




}