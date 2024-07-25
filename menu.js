document.getElementById('menu-icon').addEventListener('click', function () {
  var menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
});

document.getElementById('close-menu').addEventListener('click', function () {
  var menu = document.getElementById('mobile-menu');
  menu.classList.add('hidden');
  menu.classList.remove('flex');
});

document.getElementById('services-menu').addEventListener('click', function () {
  var dropdown = document.getElementById('services-dropdown');
  dropdown.classList.toggle('hidden');
  dropdown.classList.toggle('block');
});

document
  .getElementById('mobile-services-menu')
  .addEventListener('click', function () {
    var dropdown = document.getElementById('mobile-services-dropdown');
    dropdown.classList.toggle('hidden');
  });

document
  .getElementById('portfolio-menu')
  .addEventListener('click', function () {
    var dropdown = document.getElementById('portfolio-dropdown');
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('block');
  });

document
  .getElementById('mobile-portfolio-menu')
  .addEventListener('click', function () {
    var dropdown = document.getElementById('mobile-portfolio-dropdown');
    dropdown.classList.toggle('hidden');
  });
