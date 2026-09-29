document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav-list');

  if (burger && navList) {
    burger.addEventListener('click', function () {
      navList.classList.toggle('open');
    });
  }
});