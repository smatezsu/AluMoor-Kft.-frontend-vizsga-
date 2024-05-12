// KAPCSOLAT FOOTERRE GÖRGETÉS
document.addEventListener('DOMContentLoaded', function() {
  const kapcsolatLink = document.querySelector('nav a[href="./kapcsolat.html"]')
  if (kapcsolatLink) {
      kapcsolatLink.addEventListener('click', function(event) {
          event.preventDefault()
          document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })
      })
  }
})

//HAMBURGER MENÜ
function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  if (menuItems.style.display === "grid") {
    menuItems.style.display = "none";
  } else {
    menuItems.style.display = "grid";
  }
}

//KIEGÉSZÍTŐK SLIDER
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  document.querySelector('.next-btn').addEventListener('click', nextSlide);
  document.querySelector('.prev-btn').addEventListener('click', prevSlide);

  showSlide(currentIndex);
});

//VISSZA AZ OLDAL TETEJÉRE GOMB
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goToTopBtn").style.display = "block";
    } else {
        document.getElementById("goToTopBtn").style.display = "none";
    }
}

function goToTop() {
  document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




