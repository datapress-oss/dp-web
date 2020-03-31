const darkButton = document.getElementById('darkSwitch')
const darkButtonM = document.getElementById('darkSwitchM')
const body = document.body

darkButton.onclick = () => {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark')
  } else {
    body.classList.replace('dark', 'light')
  }
}

darkButtonM.onclick = () => {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark')
  } else {
    body.classList.replace('dark', 'light')
  }
}
