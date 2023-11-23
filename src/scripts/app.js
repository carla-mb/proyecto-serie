//configuración del slick carousel en index.html según pantallas

$('.carousel').slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
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
          slidesToScroll: 1
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

  let pages = ["lugares1.html", "escenas1.html", "escenas2.html", "curiosidades1.html", "homages1.html"];

  randomButton.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * pages.length);

    let randomPage = pages[randomIndex];
    location.href = randomPage;
  });
});
