// * variables * //
const radioButtons = document.querySelectorAll('.toggle__wrapper input')

const darkBtn = document.getElementById('dark')
const lightBtn = document.getElementById('light')

// * check colorMode from localStorage or preferences * //
window.addEventListener('DOMContentLoaded', loadColorMode)

function loadColorMode() {
  let colorMode = getLocalStorage() || colorModeFromPreferences()  // localStorage has precendence over the prefers-color-scheme
  if (colorMode === 'dark') {
    setDarkMode()
  } else if (colorMode === 'light') {
    setLightMode()
  }
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('colorMode'))
}

function colorModeFromPreferences() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' // if no preference, deafult is light
};

function setDarkMode() {
  darkBtn.checked = true;
  document.querySelector('body').classList = 'dark'
}

function setLightMode() {
  lightBtn.checked = true;
  document.querySelector('body').classList = 'light'
}


// * change colorMode by toggle * //
radioButtons.forEach(button => {
  button.addEventListener('click', changeColorMode)
})

function changeColorMode() {
  document.getElementById('dark').checked ? setDarkMode() : setLightMode();
  setLocalStorage()
}

function setLocalStorage() {
  localStorage.setItem('colorMode', JSON.stringify(document.querySelector('body').className))
}

