// fetch('destinations.json')
//   .then((response) => response.json())
//   .then((data) => {
//     const container = document.getElementById('destinations');
//     data.destinations.forEach((destination) => {
//       const destinationHTML = `
//                 <div class="destination">
//                     <img src="${destination.image}" alt="${destination.name}">
//                     <h2>${destination.name}</h2>
//                     <p>${destination.description}</p>
//                     <span class="price">${destination.price}</span>
//                 </div>
//             `;
//       container.innerHTML += destinationHTML;
//     });
//   })
//   .catch((error) => console.error('Ошибка загрузки JSON:', error));

// document.querySelectorAll('.categories button').forEach((button) => {
//   button.addEventListener('click', () => {
//     alert(`Категория: ${button.textContent}`);
//     // Здесь можно динамически обновить информацию об аттракционах
//   });
// });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50, // Отступ 20px для удобства
        behavior: 'smooth',
      });
    }
  });
});

function toggleNavbar() {
  const header = document.querySelector('header');
  // if (window.scrollY > 0 && window.scrollY <= 50) {
  //   // Если страница немного прокручена вниз
  //   header.classList.add('transparent');
  // } else {
  //   header.classList.remove('transparent');
  // }

  let lastScrollTop = 0;
  window.onscroll = function () {
    const currentScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPos > lastScrollTop) {
      header.classList.add('hidden');
      header.classList.remove('transparent');
    } else if (window.scrollY <= 100) {
      header.classList.add('transparent');
    } else {
      header.classList.remove('hidden');
    }

    lastScrollTop = currentScrollPos;
  };
}

toggleNavbar();

// document.addEventListener('DOMContentLoaded', function () {
//   const track = document.querySelector('.carousel-track');
//   const prevButton = document.querySelector('.prev');
//   const nextButton = document.querySelector('.next');

//   let index = 0; // Текущий индекс слайда

//   nextButton.addEventListener('click', function () {
//     if (index < track.children.length - 1) {
//       index++;
//       updateCarousel();
//     }
//   });

//   prevButton.addEventListener('click', function () {
//     if (index > 0) {
//       index--;
//       updateCarousel();
//     }
//   });

//   function updateCarousel() {
//     const cardWidth = track.children[0].offsetWidth; // Получаем ширину карточки
//     track.style.transform = `translateX(-${index * cardWidth}px)`;
//   }
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const modal = document.getElementById('tour-modal');
//   const modalTitle = document.getElementById('modal-title');
//   const modalDescription = document.getElementById('modal-description');
//   const modalPrice = document.getElementById('modal-price');
//   const closeBtn = document.querySelector('.close');

//   document.querySelectorAll('.tour-card').forEach((card) => {
//     card.addEventListener('click', function () {
//       modalTitle.innerText = this.getAttribute('data-title');
//       modalDescription.innerText = this.getAttribute('data-description');
//       modalPrice.innerText = this.getAttribute('data-price');

//       modal.style.display = 'flex';
//     });
//   });

//   closeBtn.addEventListener('click', function () {
//     modal.style.display = 'none';
//   });

//   window.addEventListener('click', function (e) {
//     if (e.target === modal) {
//       modal.style.display = 'none';
//     }
//   });
// });

const elements = document.querySelectorAll('.hidden_el');

function checkVisibility() {
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();
// Плавное появление контента при прокрутке

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card_field');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const carousel = document.querySelector('.carousel_wrapper');

  let currentIndex = 0;

  // Функция для смены отзывов (сдвиг карусели)
  function updateCarousel() {
    const offset = -currentIndex * 320; // Ширина карточки + отступ
    carousel.style.transform = `translateX(${offset}px)`;
  }

  // Переключение на следующую карточку
  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Переключение на предыдущую карточку
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Переворот карточки по клику
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});
