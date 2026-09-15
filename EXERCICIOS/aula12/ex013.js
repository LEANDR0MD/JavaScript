var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas.`)

if (horas < 18 && horas > 12) {
    console.log(`Boa tarde.`)
} else if (horas < 12 && horas >= 6) {
    console.log(`Bom dia.`)
} else {
    console.log(`Boa Noite.`)
}