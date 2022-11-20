const html = document.querySelector('html');
const darkToggle = document.getElementById('dark-toggle'); 
const decor = document.getElementById('decor'); 

function a(){
    if (darkToggle.checked) {
    html.classList.add('dark')
  }else{
    html.classList.remove('dark')
  }
}

const burger = document.querySelector('.hamburger'); 
const hidden= document.querySelector('.nav'); 
function hamburger() {
burger.classList.toggle('hamburger')
hidden.classList.toggle('hidden')
}




