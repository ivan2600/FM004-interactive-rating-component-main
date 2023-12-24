const number   = document.querySelectorAll('.number');




// Recorrer TODOS los pregunta  
number.forEach( ( cadaNumber , i )=>{
  // Asignando un CLICK a cada pregunta
  number[i].addEventListener('click', ()=>{
    // Si el question CONTIENE la clase activo
    if (number[i].classList.contains('activo')) {
      // Borrar la clase activo
      number[i].classList.remove('activo')
    } else {
      // Si no la contiene, agregarla.
      number[i].classList.add('activo')
    }
  })
})
// La solucion esta abajo de esta linea
    
//     h2.forEach( ( cadaH2 , i )=>{
//       // Asignando un CLICK a cada h2
//       h2[i].addEventListener('click', ()=>{
//         // Recorrer TODOS los bloque
//         bloque.forEach( ( cadaBloque , i )=>{
//           // Quitamos la clase activo de TODOS los bloque
//           bloque[i].classList.remove('activo')
//         })
//         // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
//         // (Linea número 10)
//         bloque[i].classList.add('activo')
//         console.log(boton[i].textContent)
//       })
//     }) 
//   })
// }) 






// container.addEventListener('click', function(event) {
//   // Verificar si el clic ocurrió en un elemento con la clase 'boton'
//   if (event.target.classList.contains('boton')) {
  
//     // Realizar acciones específicas para los botones
//     console.log('Clickeaste un botón:', event.target.id);
//     // Ejecutar funciones relevantes para los botones
//   }
// });