var botao = window.document.querySelector('input')
botao.addEventListener('click', clicou)
    
function clicou(){
    var produto = window.prompt('Digite o nome do produto: ')
    var valor = window.prompt('Qual o valor do produto? ')
    var conversao = parseFloat(valor)

    var pagamento = window.prompt(`Qual foi o valor que você deu para comprar o ${produto}`)
    var conversao2 = parseFloat(pagamento)

    var conta = conversao - conversao2
    window.alert(`Voce comprou ${produto} que custou ${conversao} e deu ${conversao2}, receberá ${conta} de troco`)



    
}