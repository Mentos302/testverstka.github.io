const fulls = document.querySelectorAll('.feedback__item-wrapper > p')

fulls.forEach((e) => {
  e.innerHTML = `<p style="display: none; transition: 3s all ease;">
        ${e.innerHTML}
    </p>
    <p style="transition: 3s all ease;">
    ${e.innerText.substr(0, 100)}
    </p>`
})

const readmoreBtns = document.querySelectorAll('#readmore')
readmoreBtns.forEach((e) => {
  e.addEventListener('click', (ev) => {
    const parent = ev.target.parentElement

    const paragraphs = parent.querySelector('.feedback__body').children

    parent.style.position = 'absolute'
    parent.style.zIndex = '4'
    paragraphs[0].style.display = 'block'
    paragraphs[1].style.display = 'none'
    ev.target.style.display = 'none'
  })
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

if (window.innerWidth < 800) {
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

if (window.innerWidth < 800 && window.innerWidth > 500) {
  const cards = document.querySelectorAll('.asbuyer__card')

  cards.forEach((e) => {
    const img = e.children[0]
    const imgHTML = `${img.outerHTML}`

    e.removeChild(img)

    e.innerHTML = `${imgHTML}<div>${e.innerHTML}</div>`
  })
}

if (window.innerWidth < 1000) {
  console.log(`PENIS`)
  ;(function generateMonetSwiper() {
    const wrapper = document.querySelector('.monetization__inner')

    wrapper.innerHTML = `
        <div class="swiper monetizationSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="assets/img/monetization/Shopping-cart.svg" alt="" />
            <b>Маркетплейс товаров</b>
            <p>
                Мы получаем деньги от покупателей, а также комиссии от
                торговцев
            </p>
          </div>
          <div class="swiper-slide"><img src="assets/img/monetization/Wallet.svg" alt="" />
          <b>Финансовые инструменты</b>
          <p>
            Где все стороны (инвесторы, стартапы, наши Платформы) могут
            хорошо зарабатывать
          </p></div>
          <div class="swiper-slide"><img src="assets/img/monetization/Activity.svg" alt="" />
          <b>Маркетплейс игр с DeFi </b>
          <p>
            Позволяющие инвесторам, стартапам, и нашим платформам хорошо
            зарабатывать
          </p></div>
          <div class="swiper-slide"><img src="assets/img/monetization/Change.svg" alt="" />
          <b>Обмен криптовалют </b>
          <p>
            Наши пользователи обменивают криптовалюту на ФИАТ, а ФИАТ на
            криптовалюту. Мы получаем комиссию за обмен в обе стороны.
          </p>
          </div>
          <div class="swiper-slide"><img src="assets/img/monetization/Gamee.svg" alt="" />
            <b>Естественный рост (ZLW) токена</b>
            <p>
                Мы не проводили ICO, IEO, pre-sale, airdrops, не давали скидок и
                т. д. Все разработки выполнялись за собственные средства.
                Поэтому ничто не влияет на нашу цену сейчас! И мы растем без
                всякого давления
            </p>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
        `

    var swiper = new Swiper('.mySwiper', {
      pagination: {
        el: '.swiper-pagination',
      },
    })
  })()
}
