const buttons = document.querySelectorAll('[data-modal-button]')
const fade = document.querySelector('[data-fade]')
const modal = document.querySelector('[data-modal]')

buttons.forEach(function (item) {
  item.addEventListener('click', () => {
    modal.classList.remove('none')
    fade.classList.remove('none')
  })
})

fade.addEventListener('click', () => {
  modal.classList.add('none')
  fade.classList.add('none')
})
