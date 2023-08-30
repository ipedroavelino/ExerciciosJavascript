var botao = window.document.querySelector('input')
botao.addEventListener('click', clicou)
    
function clicou(){
    var numero = window.prompt('Digite um numero qualquer: ')
    var numeroC = parseInt(numero)
    
    window.alert(`Depois de ${numero} temos ${numeroC+1}`)
    window.alert(`Antes de ${numero} temos ${numeroC-1}`)
    
}