(function(){
const sliders = [...document.querySelectorAll('.testimony__body')];
const buttonNext = document.querySelector('#next');
const buttonBefore = document.querySelector('#before');
let value;   
  buttonNext.addEventListener('click', ()=>{
changePosition(1);
 });
