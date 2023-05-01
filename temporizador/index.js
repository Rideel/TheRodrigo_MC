let relojDom = {
   hora: undefined,
   minutos: undefined,
   segundos: undefined,
  }
relojDom.hora = document.querySelector(".hora")
relojDom.minutos = document.querySelector(".minutos")
relojDom.segundos = document.querySelector(".segundos")

console.log (relojDom)

let tiempo = {
    active: false ,
    hora: "0",
    minutos: "0",
    segundos: "5",
}


 function cero(num){
    if (num <10){
        return "0"+num
    }else{
        return num
    }
 } 

 document.addEventListener("submit",function(e){
 e.preventDefault()
 let formu = e.target 
 console.log(e.target.hora.value)

 if(formu.hora.value < 0 || formu.minutos.value < 0 || formu.segundos.value < 0){
    alert("valores invalidos")
    return true;
 }
 if (formu.hora.value == 0 && formu.minutos.value == 0 && formu.segundos.value == 0){
    alert("todos los valore no pueden ser cero")
    return true;
}
 tiempo.hora = e.target.hora.value
 tiempo.minutos = e.target.minutos.value
 tiempo.segundos = e.target.segundos.value

 if(tiempo.active == false){
    document.querySelector(".fecha").innerText = ""
tiempo.active= true 
 contador(tiempo)
 }
})
 function contador(tiempo2 = {hora:0,minutos:0,segundos:0}){

    tiempo2.segundos--
  if (tiempo2.segundos < 0 ){
   tiempo2.segundos = 59;
   tiempo2.minutos--
 }
 

 if (tiempo2.minutos < 0 ){
 tiempo2.minutos = 59;
 tiempo2.hora--
}

 
if (tiempo2.hora < 0 ){}

if (tiempo2.hora == 0 && tiempo2.minutos == 0 && tiempo2.segundos == 0){
    document.querySelector(".fecha").innerText = " time out"
    tiempo.active = false 
    }else{
        setTimeout(contador,1000,tiempo2)    
        
    }
    mostrar(tiempo2)
}

function mostrar(tiempo2){
    relojDom.hora.innerText=cero(tiempo2.hora)
    relojDom.minutos.innerText=cero(tiempo2.minutos)
    relojDom.segundos.innerText=cero(tiempo2.segundos)
}



