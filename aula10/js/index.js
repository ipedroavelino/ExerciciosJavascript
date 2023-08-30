
//aula 09

//EVENTOS

var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseneter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerText = 'clicou'
    a.style.background='red'
}

function entrar(){
    a.innerText = 'Entrou'
}

function sair(){
    a.innerText = 'Saiu'
    a.style.background='green'
}



//aula10

//SISTEMA DE SOMA

function somar(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}


/* 

//if

//SISTEMA DE MULTA

function calcular(){
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('p#res')
    
    var vel = Number(txtv.value)
    res.innerHTML= `Sua velocidade atual é de ${vel}`
    
    
    if(vel>40){
        res.innerHTML += `<p>Voce foi multado por excesso de velocidade o limite era 40Km/h</p>`
    }res.innerHTML += `<p>Dirija sempre com cuidado</p>`
    
}




 //SISTEMA NACIONALIDADE
    function verificar(){
        var txtp = window.document.getElementById('#nac')
        var res = window.document.querySelector('p#resultado')
    
        if(txtp != 'brasil'){
                res.innerHTML=`Voce é estrangeiro` 
           }else {res.innerHTML = `Voce é brasileiro`}
         }
        
*/

