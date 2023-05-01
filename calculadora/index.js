/**
 * Paso 1:
 * Creamos un objecto variable para almacernar el valor de la calculadora y instanciar el span#resultado del DOM.
 */

let result = {
    valor: "",
    dom: undefined
}

const action = {
    "C":()=>{ 
        result.dom.innerText = ""
        result.valor = ""
     },
    "DEL":()=>{ 
        let resultado = result.valor.substring(0, result.valor.length - 1); 
        result.dom.innerText = resultado
        result.valor = resultado
     },
    "=":()=>{ 
        let resultado = eval(result.valor);
        result.dom.innerText = resultado
        result.valor = resultado
     },
    "ADD":(i)=>{ 
        let resultado = ""+result.valor+""+i+"";
        result.dom.innerText = resultado
        result.valor = resultado
     },
}

/**
 * Instanciamos al objeto result.dom a span#resultado
 */

result.dom = document.getElementById("resultado")

/**
 * Aplicamos a la result.dom el valor de result.valor
 */

result.dom.innerText = result.valor

document.addEventListener("click",handlerClick)

function handlerClick(e){
    let data = e.target.dataset
    if( "valor" in data ){
        // console.log(data.valor)
        if(data.valor in action){

            action[data.valor]()
        
        }else{

            action.ADD(data.valor)
        
        }


    }
}
