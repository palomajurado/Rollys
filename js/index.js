window.onload = function() {
  var menu = document.getElementById('menu');
  document.getElementById('btn-menu').addEventListener('click', function() {
    menu.classList.toggle('show');
  });

  var swiper = new Swiper(".swiper-desserts", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    grabCursor: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  var swiper1 = new Swiper(".swiper-extras", {
    slidesPerView: 2,
    spaceBetween: 25,
    freeMode: true,
    grabCursor: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  function capitalize(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  var d = new Date();
  var date = d.getDate();
  var month = d.toLocaleString('default', { month: 'long' });
  document.getElementById('current-date').innerText = `${date} de ${capitalize(month)}`;
};
