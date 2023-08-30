//Primeiro PARÁGRAFO [0]
var p1 = window.document.getElementsByTagName('p')[0]
p1.style.color = 'violet'
window.alert(p1.innerHTML)
 
//Call ID
//var d = window.document.getElementById('msg')
//d.style.background= 'green'
//var d = window.document.getElementsByName('msg')[0]
//d.innerText='olá'


//querySelector()

var d = window.document.querySelector('div#msg')
d.style.color='white'

window.document.write(window.navigator.appName)