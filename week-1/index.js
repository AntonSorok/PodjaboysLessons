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
