var botao = window.document.querySelector('input')
botao.addEventListener('click', clicou)
    
var txt = window.document.getElementById('texto')


function clicou(){
    var distancia = window.prompt('Digite uma distancia em metros (m)')

    var conversaoCM = parseFloat(distancia * 100)
    var conversaoKM = parseFloat(distancia / 1000)
    
    txt.innerHTML = `A distância de ${distancia} metros, corresponde a...<br></br> ${conversaoCM} centímetros (cm)<br></br>
    ${conversaoKM} kilometros (km)`
    



    
}