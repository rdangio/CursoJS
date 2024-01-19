var agora = new Date() // puxa dos dados da data do sistema - dia, mes, ano, dia da semana, hora, minuto, segundos
var hora = agora.getHours() // busca a hora que foi coletada no comando acima
console.log(`Agora são exatamente ${hora} horas.`) // ${} place holder
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
