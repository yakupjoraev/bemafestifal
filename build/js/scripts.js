// Custom Scripts
// Custom scripts

// Обработчик события клика по пункту меню
function smoothScroll(event) {
  event.preventDefault(); // Предотвращаем переход по ссылке

  const targetId = this.getAttribute("href"); // Получаем идентификатор целевой секции
  const targetSection = document.querySelector(targetId); // Находим соответствующую секцию

  // Выполняем плавную прокрутку к целевой секции
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: "smooth",
  });
}

// Добавляем обработчик клика ко всем пунктам меню
const menuItems = document.querySelectorAll(".menu__item-link");
menuItems.forEach(function (item) {
  item.addEventListener("click", smoothScroll);
});

// Обработчик события прокрутки страницы
function setActiveSection() {
  const sections = document.querySelectorAll("section");
  const menuItems = document.querySelectorAll(".menu__item-link");
  let lastActiveMenuItem = null;
  let offset;

  if (window.innerWidth >= 1024) {
    // Для ширины экрана больше или равной 1024 пикселей
    offset = 80;
  } else if (window.innerWidth >= 768) {
    // Для ширины экрана больше или равной 768 пикселей
    offset = 450;
  } else {
    // Для всех остальных случаев
    offset = 100;
  }

  sections.forEach(function (section) {
    const bounding = section.getBoundingClientRect();
    const menuItem = document.querySelector(`a[href="#${section.id}"]`);

    if (bounding.top <= offset && bounding.bottom > 0) {
      lastActiveMenuItem = menuItem;
    }
  });

  menuItems.forEach(function (menuItem) {
    menuItem.classList.remove("active");
  });

  if (lastActiveMenuItem) {
    lastActiveMenuItem.classList.add("active");
  }
}

// Добавляем обработчик прокрутки страницы
window.addEventListener("scroll", setActiveSection);



// Мобильное меню бургер
function burgerMenu() {
  const container = document.querySelector('.nav')

  if (!container) {
    return null
  }

  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu();

function simpleSelect() {
  const container = document.querySelector('.custom-select');

  if (!container) {
    return null
  }

  // Отображение/скрытие опций при клике на селект
  document.querySelector('.select-selected').addEventListener('click', function () {
    var options = this.nextElementSibling;
    options.classList.toggle('show');
  });

  // Выбор опции и обновление текста в селекте
  var selectOptions = document.querySelectorAll('.select-option');
  for (var i = 0; i < selectOptions.length; i++) {
    selectOptions[i].addEventListener('click', function () {
      var selectedValue = this.textContent;
      document.querySelector('.select-selected').textContent = selectedValue;
      document.querySelector('.select-options').classList.remove('show');
    });
  }

  // Установка первого элемента по умолчанию
  var firstOption = document.querySelector('.select-option');
  document.querySelector('.select-selected').textContent = firstOption.textContent;
}

simpleSelect();


function winnersSlider() {
  var winnerSliders = document.querySelectorAll(".winners__news");

  winnerSliders.forEach(winnerSlider => {
    const slider = winnerSlider.querySelector('.winners__slider');
    const slideNumber = winnerSlider.getAttribute('data-winners');

    var swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: `.winners__arrow-next${slideNumber}`,
        prevEl: `.winners__arrow-prev${slideNumber}`
      },
      pagination: {
        el: `.winners__slider-pagination${slideNumber}`
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  });
}

winnersSlider();


// function winnersSlider() {
//   var swiper = new Swiper(".winners__slider", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     navigation: {
//       nextEl: ".winners__arrow-next",
//       prevEl: ".winners__arrow-prev",
//     },
//     pagination: {
//       el: ".winners__slider-pagination",
//     },

//     breakpoints: {
//       // when window width is >= 320px
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20
//       },
//       // when window width is >= 480px
//       767: {
//         slidesPerView: 2,
//         spaceBetween: 20
//       },
//       // when window width is >= 640px
//       992: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       }
//     }
//   });
// }

// winnersSlider();


function newsSlider() {
  var swiper = new Swiper(".winner-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".winner-next",
      prevEl: ".winner-prev",
    },
    pagination: {
      el: ".winner-paganition",
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });
}

newsSlider();


var selectOptions = document.querySelectorAll('.select-option');
var winnersNews = document.querySelectorAll('.winners__news');

selectOptions.forEach(function (option) {
  option.addEventListener('click', function () {
    var selectedIndex = Array.from(selectOptions).indexOf(option);

    winnersNews.forEach(function (news, index) {
      if (index === selectedIndex) {
        // news.style.display = 'flex';
        news.classList.add('active');
      } else {
        // news.style.display = 'none';
        news.classList.remove('active');
      }
    });
  });
});

// Аккордеон
const accordionItems = document.querySelectorAll('[data-accordion-item]');
let openAccordion = null; // переменная для хранения ссылки на открытый аккордеон

function toggleAccordion() {
  if (openAccordion && openAccordion !== this) {
    // Если есть открытый аккордеон, который не совпадает с текущим
    openAccordion.classList.remove('active'); // закрыть его
    const openAccordionContent = openAccordion.nextElementSibling;
    if (openAccordionContent) {
      // если у аккордеона есть содержимое
      openAccordionContent.style.maxHeight = null; // сбросить высоту контента
    }
  }

  this.closest('[data-accordion-item]').classList.toggle('active');
  // открыть или закрыть текущий аккордеон

  const content = this.nextElementSibling;
  if (content) {
    // если у аккордеона есть содержимое
    if (content.style.maxHeight) {
      // Если контент открыт, закрыть его
      content.style.maxHeight = null;
    } else {
      // Если контент закрыт, открыть его
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  openAccordion = this; // запомнить ссылку на открытый аккордеон
}


accordionItems.forEach(item => item.querySelector('[data-accordion-item-title]').addEventListener('click', toggleAccordion));



const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});

