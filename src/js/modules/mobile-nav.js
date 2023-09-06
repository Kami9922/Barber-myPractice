const navBtn = document.querySelector('.mobile-nav-btn')
const menuIcon = document.querySelector('.nav-icon')
const menuList = document.querySelector('.menu__list')

navBtn.onclick = function () {
  // nav.classList.toggle('mobile-nav--open')
  menuIcon.classList.toggle('nav-icon--active')
  menuList.classList.toggle('menu__list--active')
  document.body.classList.toggle('no-scroll')
}
