const darkButton = document.getElementById('darkSwitch')
const darkButtonM = document.getElementById('darkSwitchM')
const body = document.body
const localStorage = window.localStorage
const darkMode = localStorage.getItem('darkMode')

darkButton.onclick = () => {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark')
    localStorage.setItem('darkMode', 'enabled')
  } else {
    body.classList.replace('dark', 'light')
    localStorage.setItem('darkMode', null)
  }
}

darkButtonM.onclick = () => {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark')
    localStorage.setItem('darkMode', 'enabled')
  } else {
    body.classList.replace('dark', 'light')
    localStorage.setItem('darkMode', null)
  }
}

if (darkMode === 'enabled') {
  body.classList.replace('light', 'dark')
  document.getElementById('darkSwitch').checked = true
} else {
  body.classList.replace('dark', 'light')
}
