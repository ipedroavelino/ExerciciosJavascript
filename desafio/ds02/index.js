var bot = window.document.getElementById('botao1')
bot.addEventListener('click', botao)

function botao(){
    var nome= window.prompt('Qual o seu nome?: ')
    var idade = window.prompt(`Olá ${nome}, qual a sua idade ?`)
    window.alert(`Acabei de conhecer ${nome} que possui ${idade} anos`)
}