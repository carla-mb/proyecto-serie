//configuración del slick carousel en index.html según pantallas

$('.carousel').slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


//botón en index.html que te lleva de forma aleatoria a una de las 5 páginas de detalle

document.addEventListener("DOMContentLoaded", function () {
  let randomButton = document.getElementById("randomButton");

  let pages = ["bienvenidos-a-richmond.html", "football-is-life.html", "galletas-galletas-y-mas-galletas.html", "cinco-cosas-que-no-sabias-de-ted-lasso.html", "guinos-navidenos.html"];

  randomButton.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * pages.length);

    let randomPage = pages[randomIndex];
    location.href = randomPage;
  });
});

//tippy

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

tippy('#randomButton', {
  content: 'Pst! Este botón te lleva a una página aleatoria :)',
  arrow: false, 
  animation: 'shift-away'
});