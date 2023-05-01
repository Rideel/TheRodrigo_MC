let relojDom = {
   hora: undefined,
   minutos: undefined,
   segundos: undefined,
   tarde: undefined,
   fecha: undefined,
}
relojDom.hora = document.querySelector(".hora")
relojDom.minutos = document.querySelector(".minutos")
relojDom.segundos = document.querySelector(".segundos")
relojDom.tarde = document.querySelector(".tarde")
relojDom.fecha = document.querySelector(".fecha")

console.log (relojDom)

let reloj = {
    hora: "12",
    minutos: "25",
    segundos: "00",
    tarde: "pm",
    fecha: "martes, 28 de febrero del 2023",
}

 function cero(num){
    if (num <10){
        return "0"+num
    }else{
        return num
    }
 } 

 function horaPm(hora){
   if (hora > 12 ){
    return hora - 12
   }else{
    return hora
}
 }

 function mostraractualizar(){
  for (const key in reloj) 
{
    relojDom[key].innerText= reloj[key]
   // console.log(key + "actualizada")
}


 }
 function obtenerHora(){
    let dt = new Date ()
    const dias = [
        "domingo",
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado",
    ]
    
    const meses = [
    
        "Enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
    ] 
    

     reloj.hora =  cero(horaPm(dt.getHours() ) )
     reloj.minutos = cero(dt.getMinutes())
     reloj.segundos = cero(dt.getSeconds()) 
     reloj.tarde = dt.getHours() > 12 ? "pm" : "am"

    //console.log(dias,meses)

     reloj.fecha = dias[dt.getDay()]+ " , " + dt.getUTCDate() + " de " + meses[dt.getMonth()]+ " del " + dt.getFullYear()

     //console.log(dt)

    mostraractualizar()
 }
setInterval(obtenerHora,1000)
 //obtenerHora()
