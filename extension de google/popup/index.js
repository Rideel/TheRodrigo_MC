function rendercards(data){
    let cards = ""
    data.map(function (item) {
            let card =
       ` <div class="card">
     <img src="${item.image}" alt="img">
     <b>${item.name}</b>
     <span>estado:${item.status}</span>
 </div>
 `
cards+=card
    })
    document.querySelector(".maincards").innerHTML = cards
}
fetch(" https://rickandmortyapi.com/api/character")
.then(res=> res.json())
.then(datos => rendercards(datos.results))