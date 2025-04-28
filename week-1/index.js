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

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  });
});

function toggleNavbar() {
  const header = document.querySelector('header');

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

document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  fetch('./reviews.json')
    .then((response) => response.json())
    .then((data) => {
      console.log('Данные из JSON:', data); // Посмотреть, что загружено
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
                          <h3 class='bold'>${reviews.name}</h3>
                          <p class='review-mark'>⭐⭐⭐⭐⭐ ${reviews.rating}</p>
                          </div>
                          <div class="card_inner_textbox-background"></div>
                      </div>
                      <div class="card-back">
                          <h3 class='bold'>${reviews.name}</h3>
                          <p class='review-description'> ${reviews.review}</p>
                          <p class='review-mark'><strong>Оценка: ${reviews.rating} ⭐</strong></p>
                      </div>
                  </div>
              `;

        card.addEventListener('click', () => {
          card.classList.toggle('flipped');
        });
        // Не работает на мобильных устройствах

        carousel.appendChild(card);
      });
      const cards = document.querySelectorAll('.card_field');
      let currentIndex = 0;

      function updateCarousel() {
        if (window.innerWidth <= 400) {
          const offset = -currentIndex * 265;
          console.log(offset);
          carousel.style.transform = `translateX(${offset}px)`;

          nextBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
              currentIndex++;
              updateCarousel();
              console.log(currentIndex);
            } else if (currentIndex < cards.length) {
              currentIndex++;
              // Изменить при другом кол-ве карточек
            }
          });

          prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
              currentIndex--;
              updateCarousel();
            }
          });
          console.log('first iteration');
        } else if (window.innerWidth > 400) {
          const offset = -currentIndex * 425;
          carousel.style.transform = `translateX(${offset}px)`;
        }
      }

      nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 4) {
          currentIndex++;
          updateCarousel();
          console.log(currentIndex);
        } else if (currentIndex < cards.length - 3) {
          currentIndex++;
          // Изменить при другом кол-ве карточек
          carousel.style.transform = `translateX(${-700}px`;
        }
      });

      prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });
      console.log('second iteration');
    })
    .catch((error) => console.error('Ошибка загрузки отзывов:', error));
});

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
