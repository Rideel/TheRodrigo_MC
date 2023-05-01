const carrusel = document.querySelector(".carrusel");
const btnIzquierda = document.querySelectorAll(".btn-izquierda");
const btnDerecha = document.querySelectorAll(".btn-derecha");
const pelicula = document.querySelector(".pelicula");
let navMain =document.querySelector (".mainNav");
let botonMenu=document.querySelector(".bMenu");
let mainMenu=document.querySelector(".mainMenu");

function dashD(e) {
        let num = e.target.parentNode.querySelectorAll(".pelicula");
    
        if(e.target.parentNode.querySelector(".carrusel").scrollLeft >= (num.length) * pelicula.offsetWidth - (carrusel.offsetWidth + 10)){
            e.target.parentNode.querySelector(".carrusel").scrollLeft = 0;
        }else{
            e.target.parentNode.querySelector(".carrusel").scrollLeft += pelicula.offsetWidth; 
        }
}


function dashI(e) {
        let num = e.target.parentNode.querySelectorAll(".pelicula");

        if(e.target.parentNode.querySelector(".carrusel").scrollLeft <= 0){
            e.target.parentNode.querySelector(".carrusel").scrollLeft += num.length * pelicula.offsetWidth;
        }else{
            e.target.parentNode.querySelector(".carrusel").scrollLeft -= pelicula.offsetWidth;
        }   
}

btnDerecha.forEach(BD =>{
    BD.addEventListener("click", dashD);
});

btnIzquierda.forEach(BI =>{
    BI.addEventListener("click", dashI);
});

botonMenu.addEventListener("click",function(e){
    mainMenu.classList.toggle("show")
  })
  window.addEventListener("scroll",function(e){
      let scroll = Math.floor(window.scrollY)
      if (scroll>100){
          navMain.classList.add("navActive")
      }else{
        navMain.classList.remove("navActive")
      }
      console.log(scroll)
  })
