var todos = document.querySelector('#todos')
var mujeres = document.querySelector('#mujeres')
var hombres = document.querySelector('#hombres')
var genero = document.querySelector('#genero')
var locations = document.querySelector('#localizacion')
var paginaActual = document.querySelector('#pagActual')
var totalPaginas = document.querySelector('#pagTotal')




fetch(`https://rickandmortyapi.com/api/character/`)
  .then((res) => res.json())
  .then((data) =>{
    console.log(data)

    let elementos = document.getElementById('tarjetas')
    let html = ""
    for (let i = 0; i < 20; i++) {
      html = html +
      `
      <div class='card'>
      <h2>${data.results[i].name}</h2>
      <img src=${data.results[i].image} alt="">
      <p>Estado: ${data.results[i].status}</p>
      <p>Especie: ${data.results[i].species}</p>
      <p>Genero: ${data.results[i].gender}</p>
      <p>Localizacion: ${data.results[i].locations}</p>
    
  
   
      </div>
      `
    }
    elementos.innerHTML = html
    totalPaginas.innerHTML = `<p>Total de páginas: ${data.info.pages}</p>`

  
    if(data.info.prev === null){
      paginaActual.innerHTML = `<p>Página actual: 1</p>`
    } 
    
   else {
   
      let urlPagActual = data.info.prev 
      if(urlPagActual.split('')[urlPagActual.length - 2] === "="){
      let pagActual = urlPagActual.split('')[urlPagActual.length - 1] 
      paginaActual.innerHTML = `<p>Página actual: ${Number(pagActual) + 1}</p>` 
      } else {
      
        let digitoUno = urlPagActual.split('')[urlPagActual.length - 2] 
        let digitoDos = urlPagActual.split('')[urlPagActual.length - 1] 
        let concatenar = digitoUno + digitoDos
        paginaActual.innerHTML = `<p>Página actual: ${Number(concatenar) + 1}</p>` 
      }
    }

})

todos.addEventListener('click', () => {
  fetch(`https://rickandmortyapi.com/api/character/`)
  .then((res) => res.json())
  .then((data) =>{
    console.log(data)

    let elementos = document.getElementById('tarjetas')
    let html = ""
    for (let i = 0; i < 20; i++) {
      html = html +
      `
      <div class='card'>
      <h2>${data.results[i].name}</h2>
      <img src=${data.results[i].image} alt="">
      <p>Estado: ${data.results[i].status}</p>
      <p>Especie: ${data.results[i].species}</p>
      <p>Genero: ${data.results[i].gender}</p>
      <p>Localizacion: ${data.results[i].locations}</p>
     
      </div>
      `
    }
    elementos.innerHTML = html
    totalPaginas.innerHTML = `<p>Total de páginas: ${data.info.pages}</p>`

    
    if(data.info.prev === null){
      paginaActual.innerHTML = `<p>Página actual: 1</p>`
    } 
   
   else {
   
      let urlPagActual = data.info.prev 
      if(urlPagActual.split('')[urlPagActual.length - 2] === "="){
      let pagActual = urlPagActual.split('')[urlPagActual.length - 1] 
      paginaActual.innerHTML = `<p>Página actual: ${Number(pagActual) + 1}</p>` 
      } else {
        
        let digitoUno = urlPagActual.split('')[urlPagActual.length - 2]
        let digitoDos = urlPagActual.split('')[urlPagActual.length - 1] 
        let concatenar = digitoUno + digitoDos 
        paginaActual.innerHTML = `<p>Página actual: ${Number(concatenar) + 1}</p>` 
      }
    }

})
})

mujeres.addEventListener('click', () => {
  fetch(`https://rickandmortyapi.com/api/character/?gender=female`)
  .then((res) => res.json())
  .then((data) =>{
    console.log(data)

    let elementos = document.getElementById('tarjetas')
    let html = ""
    for (let i = 0; i < 20; i++) {
      html = html +
      `
      <div class='card'>
      <h2>${data.results[i].name}</h2>
      <img src=${data.results[i].image} alt="">
      <p>Estado: ${data.results[i].status}</p>
      <p>Especie: ${data.results[i].species}</p>
      <p>Genero: ${data.results[i].gender}</p>
      <p>Localizacion: ${data.results[i].locations}</p>
    
      </div>
      `
    }
    elementos.innerHTML = html
    totalPaginas.innerHTML = `<p>Total de páginas: ${data.info.pages}</p>`
    if(data.info.prev === null){
      paginaActual.innerHTML = `<p>Página actual: 1</p>`
    }
})
})
hombres.addEventListener('click', () => {
  fetch(`https://rickandmortyapi.com/api/character/?gender=male`)
  .then((res) => res.json())
  .then((data) =>{
    console.log(data)

    let elementos = document.getElementById('tarjetas')
    let html = ""
    for (let i = 0; i < 20; i++) {
      html = html +
      `
      <div class='card'>
      <h2>${data.results[i].name}</h2>
      <img src=${data.results[i].image} alt="">
      <p>Estado: ${data.results[i].status}</p>
      <p>Especie: ${data.results[i].species}</p>
      <p>Genero: ${data.results[i].gender}</p>
      <p>Localizacion: ${data.results[i].locations}</p>
      
      </div>
      `
    }
    elementos.innerHTML = html
    totalPaginas.innerHTML = `<p>Total de páginas: ${data.info.pages}</p>`
    if(data.info.prev === null){
      paginaActual.innerHTML = `<p>Página actual: 1</p>`
    }

    
})
})
locations.addEventListener('click', () => {
  fetch(`https://rickandmortyapi.com/api/location/`)
  .then((res) => res.json())
  .then((data) =>{
    console.log(data)

    let elementos = document.getElementById('tarjetas')
    let html = ""
    for (let i = 0; i < 20; i++) {
      html = html +
      `
      <div class='card'>
      <h2>${data.results[i].name}</h2>
      <img src=${data.results[i].image} alt="">
      <p>Estado: ${data.results[i].status}</p>
      <p>Especie: ${data.results[i].species}</p>
      <p>Genero: ${data.results[i].gender}</p>
      <p>Localizacion: ${data.results[i].locations}</p>
      
      </div>
      `
    }
    elementos.innerHTML = html
    totalPaginas.innerHTML = `<p>Total de páginas: ${data.info.pages}</p>`
    if(data.info.prev === null){
      paginaActual.innerHTML = `<p>Página actual: 1</p>`
    }

    
})
})
