$(function () {
  let header = $(".header");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("header_fixed");
    } else {
      header.removeClass("header_fixed");
    }
  });
});

$(function () {
  let header = $(".header");
  let hederHeight = header.height(); // вычисляем высоту шапки

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("header_fixed");
      $("body").css({
        paddingTop: hederHeight + "px", // делаем отступ у body, равный высоте шапки
      });
    } else {
      header.removeClass("header_fixed");
      $("body").css({
        paddingTop: 0, // удаляю отступ у body, равный высоте шапки
      });
    }
  });
});
$(".button").click(function () {
  let link =
    "https://kuula.co/share/collection/7c2B9?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1&inst=ru";
  window.open(link, "_blank");
});
$(".button2").click(function () {
  let link = "https://app.lapentor.com/sphere/kvantorium-krylova-411";
  window.open(link, "_blank");
});
$(".button3").click(function () {
  let link = "https://gistkin.github.io/VR_tour_Pokachi_School4/";
  window.open(link, "_blank");
});
$(".button4").click(function () {
  let link = "https://uploads.knightlab.com/scenevr/14371/3cdce2fa/index.html";
  window.open(link, "_blank");
});
$(".button5").click(function () {
  let link =
    "https://vr-tour-nyagan-school3.vercel.app/%D0%A2%D0%A3%D0%A0%20%D0%9A%D0%92%D0%90%D0%9D%D0%A2%D0%9E%D0%A0%D0%98%D0%A3%D0%9C.html";
  window.open(link, "_blank");
});
$(".button6").click(function () {
  let link = "https://360tour3213123.github.io/360tourkvantorium/";
  window.open(link, "_blank");
});
$(".button7").click(function () {
  let link = "https://vrtsh3.ru";
  window.open(link, "_blank");
});
$(".button8").click(function () {
  let link = "https://gistkin.github.io/VR_tour_Rad_School8/";
  window.open(link, "_blank");
});
$(".button9").click(function () {
  let link =
    "https://vanechkina.github.io/VR-Tour-360-IT-Cube-Surgut/HTML/output-2/";
  window.open(link, "_blank");
});
$(".button10").click(function () {
  let link = "https://99anasea99.github.io/virt_Tur_Peregrebinskaya/";
  window.open(link, "_blank");
});
$(".button11").click(function () {
  let link = "https://gistkin.github.io/VR_tour_Rad_School3/";
  window.open(link, "_blank");
});
// Получаем элемент шапки
var header = document.querySelector(".header");

// Получаем начальное смещение шапки от верхней части страницы
var headerOffset = header.offsetTop;

// Функция, которая будет вызываться при прокрутке страницы
function fixHeader() {
  // Если прокрутка страницы больше или равна начальному смещению шапки
  if (window.pageYOffset >= headerOffset) {
    // Применяем класс .header_fixed
    header.classList.add("header_fixed");
  } else {
    // Убираем класс .header_fixed
    header.classList.remove("header_fixed");
  }
}
