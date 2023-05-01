const carrusel = document.querySelector(".carrusel");
const btnIzquierda = document.querySelectorAll(".btn-izquierda");
const btnDerecha = document.querySelectorAll(".btn-derecha");
const pelicula = document.querySelector(".pelicula");

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
