/*
jorge: 
jesus: guardar en array y cambiar la posicion del mismo con js
*/

const images = ['../public/img/pizza1.png', '../public/img/pizza2.png', '../public/img/pizza3.png'];
const smallImages = [];
const backColor = ['#c8cf96ff', '#5c2a73ff', '#f5ad27ff'];

let image = document.getElementById('image');
let position = 0;
let angulo = 0;

function renderImage() {
  document.body.style.backgroundColor = backColor[position];
  image.src = images[position];
  image.classList.remove('fade-in');
  image.classList.add('fade-out');

  setTimeout(() => {
    angulo += 20;
    image.style.transform = `rotate(${angulo}deg)`;
    image.classList.remove('fade-out');
    image.classList.add('fade-in');
  }, 100);
}

function prevImage() {
  position--;
  renderImage();
}

function nextImage() {
  position++;
  renderImage();
}

renderImage();
