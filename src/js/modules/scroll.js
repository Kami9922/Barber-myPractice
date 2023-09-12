let arrow = document.querySelector('.return-arrow')

window.addEventListener('scroll', function () {
  arrow.classList.toggle('return-arrow--active', window.scrollY > 1000)
})

function scrollTop() {
  window.scrollTo({ top: 0 })
}

arrow.addEventListener('click', scrollTop)
