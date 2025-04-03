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
// fetch('./reviews.json')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Ошибка загрузки: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     if (!data || !Array.isArray(data)) {
//       throw new Error('Полученные данные не являются массивом!');
//     }
//     console.log('Данные загружены:', data);
//   })
//   .catch((error) => console.error('Ошибка:', error));

document.addEventListener('DOMContentLoaded', () => {

  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.next')

  fetch('./reviews.json')
    .then((response) => response.json())
    .then((data) => {
      console.log("Данные из JSON:", data); // Посмотреть, что загружено
      // const container = document.querySelector('.carousel_wrapper');
      const carousel = document.querySelector('.carousel_wrapper');


      data.reviews.forEach((reviews) => {
        const card = document.createElement('div');
        card.classList.add('card_field');

        card.innerHTML = `
                  <div class="card_inner">
                      <div class="card-front">
                          <img src="${reviews.image}" alt="Фото ${reviews.name}">
                          <div class="card_inner_textbox">
                              <div class="card_inner_textbox-background"></div>
                              <h3>${reviews.name}</h3>
                              <p>⭐⭐⭐⭐⭐ ${reviews.rating}</p>
                          </div>
                      </div>
                      <div class="card-back">
                          <h3>${reviews.name}</h3>
                          <p>${reviews.review}</p>
                          <p><strong>Оценка: ${reviews.rating} ⭐</strong></p>
                      </div>
                  </div>
              `;

        // Добавляем обработчик клика для переворота карточки
        card.addEventListener('click', () => {
          card.classList.toggle('flipped');

          
    
        });

        carousel.appendChild(card);
      });
      const cards = document.querySelectorAll('.card_field')
     let currentIndex = 0;

     // Функция для смены отзывов (сдвиг карусели)
     function updateCarousel() {
       const offset = -currentIndex * 325; // Ширина карточки + отступ
       carousel.style.transform = `translateX(${offset}px)`;
     }

         // Переключение на следующую карточку
   nextBtn.addEventListener('click', () => {
     if (currentIndex < cards.length - 3) {
       currentIndex++;
       updateCarousel();
     }
     console.log(cards);
     console.log(cards.length);

   });

     // Переключение на предыдущую карточку
     prevBtn.addEventListener('click', () => {
       if (currentIndex > 0) {
         currentIndex--;
         updateCarousel();
       }
       console.log('left arrow');

     })
    })
    .catch((error) => console.error('Ошибка загрузки отзывов:', error));
});

// document.addEventListener('DOMContentLoaded', () => {
//   fetch('reviews.json')
//     .then((response) => response.json())
//     .then((data) => {
//       const conteiner = document.querySelector('.carousel_wrapper');

//       data.forEach((carousel) => {
//         const card = document.createElement('div');
//         card.classList.add('card_field');

//         card.innerHTML = `
//                 <div class="card_inner">
//                   <div class="card-front">
//                     <img src="${reviews.image}" alt="${reviews.alt}">
//                     <div class="card_inner_textbox">
//                       <div class="card_inner_textbox-background">
//                       </div>
//                         <h3>${reviews.name}</h3>
//                         <p>${reviews.rating}</p>
//                     </div>
//                   </div>
//                   <div class="card-back">
//                     <h3>${reviews.name}</h3>
//                     <p>${reviews.review}</p>
//                   </div>
//                 </div>`;

//         card.addEventListener('click', () => {
//           card.querySelector('.card_inner').classList.toggle('flipped');
//         });

//         conteiner.appendChild(card);
//       });
//     })
//     .catch((error) => console.error(`something happened`));
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

// document.addEventListener('DOMContentLoaded', () => {
//   const cards = document.querySelectorAll('.card_field');
//   const prevBtn = document.querySelector('.prev');
//   const nextBtn = document.querySelector('.next');
//   const carousel = document.querySelector('.carousel_wrapper');

//   let currentIndex = 0;

//   // Функция для смены отзывов (сдвиг карусели)
//   function updateCarousel() {
//     const offset = -currentIndex * 325; // Ширина карточки + отступ
//     carousel.style.transform = `translateX(${offset}px)`;
//   }

//   // Переключение на следующую карточку
//   nextBtn.addEventListener('click', () => {
//     if (currentIndex < cards.length - 1) {
//       currentIndex++;
//       updateCarousel();
//     }
//     console.log('right arrow');
//   });

//   // Переключение на предыдущую карточку
//   prevBtn.addEventListener('click', () => {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateCarousel();
//     }
//     console.log('left arrow');
//   });

//   // Переворот карточки по клику
//   cards.forEach((card) => {
//     card.addEventListener('click', () => {
//       card.classList.toggle('flipped');
//       console.log('card flipped');
//     });
//   });
// });
