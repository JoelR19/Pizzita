/*
jorge: 
jesus: guardar en array y cambiar la posicion del mismo con js
*/

const images = ['../public/img/pizza1.png', '../public/img/pizza2.png', '../public/img/pizza3.png'];
const smallImages = ['../public/img/pepe.png', '../public/img/cherry.png', '../public/img/pepe.png'];
const backColor = ['#c8cf96ff', '#5c2a73ff', '#f5ad27ff'];

let smallImage = document.querySelectorAll('.small');
let image = document.getElementById('image');
let position = 0;
let angulo = 0;

function renderImage() {
  smallImage.forEach((img, index) => {
    img.src = smallImages[position];
  });

  console.log(smallImage);
  document.body.style.backgroundColor = backColor[position];
  image.src = images[position];
  image.classList.remove('fade-in');
  image.classList.add('fade-out');

  setTimeout(() => {
    image.style.transform = `rotate(${angulo}deg)`;
    image.classList.remove('fade-out');
    image.classList.add('fade-in');
  }, 100);
}

function prevImage() {
  angulo -= 20;
  position--;
  if (position < 0) {
    position = 2;
  }
  renderImage();
}

function nextImage() {
  angulo += 20;
  position++;
  if (position > 2) {
    position = 0;
  }
  renderImage();
}

renderImage();
