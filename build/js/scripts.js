// Custom Scripts
// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
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



function winnersSlider() {
  var swiper = new Swiper(".winners__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".winners__arrow-next",
      prevEl: ".winners__arrow-prev",
    },
    pagination: {
      el: ".winners__slider-pagination",
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

winnersSlider();

