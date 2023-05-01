const acciones={
    remove: (i)=>{
  let lista=[]
        bd.map((tarea,index)=>{
            if (i ==index){

            }else{
                lista.push(tarea)
            }
    }),
        bd = lista
        renderlist(bd)
    },
    accept:(i)=>{
        bd[i].estado = 1
        renderlist(bd)
    },
    progress:(i)=>{
        bd[i].estado = 0
        renderlist(bd)
    }
}
let bd = []

let domContainer = {
    mainsection: undefined
}
domContainer.mainsection = document.querySelector(".mainSection")

document.addEventListener("click",function(e){
    let dataset=e.target.dataset
    if("index"in dataset){
    let ac = e.target.classList[0]
    acciones[ac](dataset.index)
}
})

document.formulario.addEventListener("submit",crearTarea)



function crearTarea(e){
    
    e.preventDefault()
    bd.push(
        {
            titulo:document.formulario.tarea.value,
            estado:0
        }
    )
document.formulario.tarea.value=""
renderlist(bd)

    //let tarea={
       // titulo: document.formulario.tarea.value,
     //   index:10
   // }
    //domContainer.mainsection.innerHTML= renderlistTodo(tarea);
}
function renderlistTodo(obj){
    return `<article class="listTodo ${obj.estado ? "accept":""}">
 <span>${obj.index + 1}</span>
 <b>${obj.titulo}</b>
 <button data-index="${obj.index}" class="accept"></button>
 <button data-index="${obj.index}" class="progress"></button>
 <button data-index="${obj.index}" class="remove"></button>
</article>`

}
function renderlist(bd){
    let string=""

 bd.map( (item,index)=>
 {
    let tarea = {... item,index}

    string += renderlistTodo(tarea) 
    
    console.log(item,tarea)
})

domContainer.mainsection.innerHTML = string

}