let a = [5, 8, 4]
a[3] = 6
a.push(8)

let pos = a.indexOf(2)

if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    
    console.log(pos)
}


/**
 for(let pos in a){
     console.log(`A posição ${pos} tem o valor ${a[pos]}`)
 }
 
 
  
//Percurso VETORES
for(let pos = 0; pos < a.length; pos++){

    console.log(`A posição ${pos} tem o valor ${a[pos]}`)
}
 * 
 */

//  .indexOf()  --> Buscar valores dentro do Array
//  .push --> adicionar VALOR
//  .sort() --> posicionar numeros em ordem 