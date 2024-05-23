$(function() {
 let header = $('.header');
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('header_fixed');
   } else {
    header.removeClass('header_fixed');
   }
 });
});

$(function() {
 let header = $('.header');
 let hederHeight = header.height(); // вычисляем высоту шапки
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('header_fixed');
    $('body').css({
       'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
    });
   } else {
    header.removeClass('header_fixed');
    $('body').css({
     'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
    })
   }
 });
});
$('.button').click(function(){
   window.location.href='soobr/soobr.html';
})
$('.button2').click(function(){
   window.location.href='forma.html';
})
$('.button22').click(function(){
   window.location.href='exc/exc.html';
})
$('.button222').click(function(){
   window.location.href='master/master.html';
})
// Получаем элемент шапки
var header = document.querySelector('.header');

// Получаем начальное смещение шапки от верхней части страницы
var headerOffset = header.offsetTop;

// Функция, которая будет вызываться при прокрутке страницы
function fixHeader() {
  // Если прокрутка страницы больше или равна начальному смещению шапки
  if (window.pageYOffset >= headerOffset) {
    // Применяем класс .header_fixed
    header.classList.add('header_fixed');
  } else {
    // Убираем класс .header_fixed
    header.classList.remove('header_fixed');
  }
}

// Вызываем функцию fixHeader() при прокрутке страницы
window.addEventListener('scroll', fixHeader);
// Функция открытия iframe
function myWindow5(e) {
  if (!e.parentNode.querySelector('iframe')) { // Проверяем, что iframe еще не добавлен
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://gistkin.github.io/marzipano_test-host-on-github/');
    e.parentNode.appendChild(iframe); // Добавляем iframe внутрь родительского элемента
  }
}
function myWindow2() {
  var raz = window.parent.document.querySelector('iframe[src^="https://gistkin.github.io/marzipano_test-host-on-github/"]'); // удалить созданный в родителе iframe
  raz.parentNode.removeChild(raz);
}
function myWindow6(parentNode) {
  if (!parentNode.querySelector('iframe')) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'http://shpargalkablog.ru/2014/10/window-open-javascript.html'); // Замените URL на новый
    iframe.setAttribute('height', '200');
    parentNode.appendChild(iframe);
  }
}

function myWindow3(parentNode) {
  var iframe = parentNode.querySelector('iframe'); // Найти iframe в родительском элементе
  if (iframe) {
    iframe.parentNode.removeChild(iframe); // Удалить iframe
  }
}


