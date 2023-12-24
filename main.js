const number          = document.querySelectorAll('.number');
const submit          = document.querySelector('.submit');
const mainContainer   = document.querySelector('.main-container');
const thankContainer  = document.querySelector('.thank-container');
const rating          = document.querySelector('.rating');
let selected;

number.forEach( ( cadaNumber , i )=>{
  // Asignando un CLICK a cada number
  number[i].addEventListener('click', ()=>{
    // Recorrer TODOS los number
    number.forEach( ( cadaNumber , i )=>{
      // Quitamos la clase activo de TODOS los number
      number[i].classList.remove('activo')
    })
    // Añadiendo la clase activo al number seleccionado
    number[i].classList.add('activo')
    // Asignando numero elegido a la variable SELECTED
    selected = number[i].textContent;
  })
}) 

submit.addEventListener('click', ()=>{
  if (selected > 0) {
    mainContainer.classList.add('none');
    thankContainer.classList.add('grid');
    rating.innerText = `You selected ${selected} out of 5`;
    console.log('funca')
  } else {
    alert('Select a rating!');
  }
})