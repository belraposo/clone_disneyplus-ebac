document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]')
  const questions = document.querySelectorAll('[data-faq-question]')

  const heroSection = document.querySelector('.hero');
  const heroHight = heroSection.clientHeight;
  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY

    if (scrollPosition > heroHight) {
      hiddenItemsHeader()
    } else {
      visibleItemsHeader()
    }
  })

  for (let x = 0; x < buttons.length; x++) {
    buttons[x].addEventListener('click', function(btn) {
      const tabSelect = btn.target.dataset.tabButton
      const tab = document.querySelector(`[data-tab-id=${tabSelect}]`)
      hiddenTabs()
      tab.classList.add('shows__list--is-active')
      hiddenActiveTabs()
      btn.target.classList.add('shows__tabs__button--is-active')
    })
  }

  for (let y = 0; y < questions.length; y++) {
    questions[y].addEventListener('click', openClose)
  }
})

function hiddenItemsHeader() {
  const header = document.querySelector('.header')
  header.classList.add('header--is-hidden')
}

function visibleItemsHeader() {
  const header = document.querySelector('.header')
  header.classList.remove('header--is-hidden')
}

function hiddenTabs() {
  const hdnTabs = document.querySelectorAll('[data-tab-id]')
  
  for (let x = 0; x < hdnTabs.length; x++) {
    hdnTabs[x].classList.remove('shows__list--is-active')
  }
}

function hiddenActiveTabs() {
  const hdnActiveTabs = document.querySelectorAll('[data-tab-button]')

  for (let x = 0; x < hdnActiveTabs.length; x++) {
    hdnActiveTabs[x].classList.remove('shows__tabs__button--is-active')
  }
}

function openClose(element) {
  const classFaq = 'faq__questions__item--is-open'
  const principalElement = element.target.parentNode

  principalElement.classList.toggle(classFaq)
}