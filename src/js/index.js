// import mobileNav from './modules/mobile-nav.js'
// mobileNav()
import { init } from './modules/map.js'

const tabsBtn = document.querySelectorAll('.button-tab')

tabsBtn.forEach((item) => {
  item.addEventListener('click', function () {
    console.log('click')
  })
})
