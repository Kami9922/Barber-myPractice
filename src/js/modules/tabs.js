const tabBtns = document.querySelectorAll('[data-tab]')
const contentBoxes = document.querySelectorAll('[data-tab-content')

tabBtns.forEach((item) => {
  item.addEventListener('click', function () {
    const contentBox = document.querySelector('#' + this.dataset.tab)

    contentBoxes.forEach((item) => {
      item.classList.add('none')
    })
    contentBox.classList.remove('none')
    tabBtns.forEach((item) => {
      item.classList.remove('button--active')
    })
    item.classList.add('button--active')
  })
})
