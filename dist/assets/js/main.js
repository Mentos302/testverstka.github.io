const fulls = document.querySelectorAll('.feedback__item-wrapper > p')

fulls.forEach((e) => {
  e.innerHTML = `<p style="display: none; transition: 3s all ease;">
        ${e.innerHTML}
    </p>
    <p style="transition: 3s all ease;">
    ${e.innerText.substr(0, 100)}
    </p>`
})

const readmoreBtns = document.querySelectorAll('.feedback__item')
readmoreBtns.forEach((e) => {
  const showFeedback = (ev) => {
    const parent = ev.target.querySelector('.feedback__item-wrapper')

    const paragraphs = parent.querySelector('.feedback__body').children

    parent.style.position = 'absolute'
    parent.style.zIndex = '4'
    paragraphs[0].style.display = 'block'
    paragraphs[1].style.display = 'none'
    ev.target.querySelector('#readmore').style.display = 'none'
  }

  const hideFeedback = (ev) => {
    const parent = ev.target.querySelector('.feedback__item-wrapper')

    const paragraphs = parent.querySelector('.feedback__body').children

    parent.style.position = 'relative'
    parent.style.zIndex = '1'
    paragraphs[0].style.display = 'none'
    paragraphs[1].style.display = 'block'
    ev.target.querySelector('#readmore').style.display = 'block'
  }

  if (window.innerWidth > 500) {
    e.addEventListener('mouseenter', showFeedback)
    e.addEventListener('mouseleave', hideFeedback)
  } else {
    let isOpen
    const toggleOpen = (ev) => {
      if (isOpen) {
        isOpen = false
        hideFeedback(ev)
      } else {
        isOpen = true
        showFeedback(ev)
      }
    }

    e.addEventListener('click', toggleOpen)
  }
})

const ecosystemBtns = document.querySelectorAll('.ecosystem-switcher-item')

ecosystemBtns.forEach((e) => {
  e.addEventListener('click', (ev) => {
    document
      .querySelector('.ecosystem-switcher-item.active')
      .classList.remove('active')

    document
      .querySelector('.ecosystem__layout.active')
      .classList.remove('active')

    document.getElementById(`${ev.target.id}__content`).classList.add('active')
    ev.target.classList.add('active')
  })
})

if (window.innerWidth < 838) {
  const el = document.querySelector('.facts__inner')

  const el1 = el.children[0].children[1]
  const el2 = el.children[1].children[0]

  const buffer = `${el2.innerHTML}`

  el2.innerHTML = el1.innerHTML
  el1.innerHTML = buffer

  const { children } = document.querySelector('.monetization__inner')

  const bff = `${children[1].outerHTML}`

  children[0].innerHTML = children[0].innerHTML + bff

  children[1].outerHTML = ''
}

if (window.innerWidth < 800 || window.innerWidth > 500) {
  const cards = document.querySelectorAll('.asbuyer__card')

  cards.forEach((e) => {
    const img = e.children[0]
    const imgHTML = `${img.outerHTML}`

    e.removeChild(img)

    e.innerHTML = `${imgHTML}<div>${e.innerHTML}</div>`
  })
}

if (window.innerWidth < 500) {
  const el = document.querySelector('.mediaSwiper .mediaSlider-btns')

  const htmlBuffer = `${el.outerHTML}`
  el.outerHTML = ``

  document.querySelector('.mediaSwiper').innerHTML += htmlBuffer
}

if (window.innerWidth < 500) {
  console.log(`PENIS`)
  const switchersWrapper = document.querySelector('.ecosystem-switchers')
  const switchers = document.querySelectorAll('.ecosystem-switchers > *')
  let slides = ``

  switchers.forEach((e) => {
    slides += `
      <div class="swiper-slide">
          ${e.outerHTML}
      </div>
    `
  })

  switchersWrapper.innerHTML = `
    <div class="swiper ecosystemSwiper">
      <div class="swiper-wrapper">
        ${slides}
      </div>
      <div class="swiper-pagination"></div>
    </div>
  `
}

if (window.innerWidth < 500) {
  let buffer = ''
  const wrapper = document.querySelectorAll('.footer__head > *')

  buffer = `${wrapper[0].outerHTML}`

  wrapper[0].outerHTML = wrapper[1].outerHTML
  wrapper[1].outerHTML = buffer
}

new Swiper('.mediaSwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30,
    // },
    // when window width is >= 640px
    800: {
      slidesPerView: 3,
    },
  },
})

new Swiper('.partnersSwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  slidesPerView: 1.3,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 640px
    500: {
      slidesPerView: 2.7,
      spaceBetween: 25,
    },
    800: {
      slidesPerView: 4.5,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 6.2,
      spaceBetween: 25,
    },
  },
})
new Swiper('.monetizationSwiper', {
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
})

new Swiper('.earningSwiper', {
  spaceBetween: 23,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
})

const ecosystemSlider = new Swiper('.ecosystemSwiper', {
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 23,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
})

ecosystemSlider.on('slideChange', function (ev) {
  const switchers = document.querySelectorAll(
    '.ecosystemSwiper .ecosystem-switcher-item'
  )
  console.log(ev.realIndex)

  const changeActive = (slug) => {
    document
      .querySelectorAll(`.ecosystem-switcher-item.active`)
      .forEach((e) => {
        e.classList.remove('active')
      })
    document
      .querySelector('.ecosystem__layout.active')
      .classList.remove('active')

    document.getElementById(`${slug}__content`).classList.add('active')
    document.querySelectorAll(`#${slug}`).forEach((e) => {
      e.classList.add('active')
    })
  }

  switch (ev.realIndex) {
    case 0:
      changeActive('marketplace')
      break
    case 1:
      changeActive('games')
      break
    case 2:
      changeActive('exchange')
      break
    case 3:
      changeActive('fintech')
      break
  }
})
