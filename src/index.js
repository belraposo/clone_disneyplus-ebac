document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]')
  
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
})

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